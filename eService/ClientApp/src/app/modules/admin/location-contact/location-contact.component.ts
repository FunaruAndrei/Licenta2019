import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { LocationContactService } from './location-contact.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { AddLocationContactComponent } from './add-location-contact/add-location-contact.component';
import { DeleteLocationContactComponent } from './delete-location-contact/delete-location-contact.component';

import * as _ from 'lodash';
import { ContactType } from 'src/app/core/models/contact-type';
import { ServiceLocationContact } from 'src/app/core/models/service-location-contact';

class ShownContact {
  id: number;
  type: string;
  icon: string;
  value: string;
}

@Component({
  selector: 'app-location-contact',
  templateUrl: './location-contact.component.html',
  styleUrls: ['./location-contact.component.scss']
})
export class LocationContactComponent implements OnInit, OnChanges {
  firstTime: boolean = true;
  locationId: number;
  servInfoId: number;
  @Input('ctypes') contactTypes: ContactType[];
  hasCTypes: boolean = false;
  locationContacts: ServiceLocationContact[];

  shownContacts: ShownContact[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  _addContact: ServiceLocationContact;
  displayedColumns: string[] = ['icon', 'value', 'actions'];
  dataSource: MatTableDataSource<ShownContact> = new MatTableDataSource(this.shownContacts);
  
  ngOnChanges() {
    if (this.contactTypes) {
      this.hasCTypes = true;
      this.firstTime = false;
      this.GetLocationContact(this.locationId);
    }
  }

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private contactService: LocationContactService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      if (!this.firstTime) {
        this.GetLocationContact(this.locationId);
      }
      
    });
  }

  ngOnInit() {
  }

  GetLocationContact(item: number) {
    this.loaderService.show();
    this.locationContacts = [];
    this.contactService.GetContacts(item).subscribe(e => {
      this.loaderService.hide();
      this.locationContacts = e;

      this.shownContacts = [];
      this.locationContacts.forEach(e => {
        this.shownContacts.push({
          id: e.serviceLocationContactId,
          type: this.contactTypes.filter(z => z.contactTypeId == e.contactTypeId)[0].name,
          icon: this.contactTypes.filter(z => z.contactTypeId == e.contactTypeId)[0].icon,
          value: e.value
        } as ShownContact);
      });


      this.SetDataSource();

    });

  }

  SetDataSource() {
    this.dataSource = new MatTableDataSource(this.shownContacts);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddContact() {
    this._addContact = new ServiceLocationContact();
    const dialogRef = this.dialog.open(AddLocationContactComponent, {
      width: '350px',
      data: {
        types: this.contactTypes,
        contact: this._addContact
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != undefined && result != null) {
        this._addContact = result.contact;
        this._addContact.serviceLocationId = this.locationId;
        this.AddContactConfirm();

      }

    });

  }

  AddContactConfirm() {

    this.loaderService.show();

    this.contactService.SaveContact(this._addContact).subscribe(e => {
      this.loaderService.hide();

      if (e == 0) {
        this.iziToast.error({
          message: "A aparut o eroare, incercati din nou!",
          position: "bottomCenter"
        });
      } else {
        this._addContact.serviceLocationContactId = e;
        this.locationContacts.unshift(this._addContact);
        this.shownContacts.unshift({
          id: e,
          type: this.contactTypes.filter(z => z.contactTypeId == this._addContact.contactTypeId)[0].name,
          icon: this.contactTypes.filter(z => z.contactTypeId == this._addContact.contactTypeId)[0].icon,
          value: this._addContact.value
        } as ShownContact);
        this.SetDataSource();
      }

    });

  }

  DeleteContact(item: ShownContact): void {
    const dialogRef = this.dialog.open(DeleteLocationContactComponent, {
      width: '250px',
      data: this.locationContacts.filter(e => e.serviceLocationContactId == item.id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result != undefined) {

        this.loaderService.show();

        this.contactService.DeleteContact(item.id).subscribe(
          (response) => {
            this.loaderService.hide();

            if (response == false) {
              this.iziToast.error({
                message: "A aparut o eroare, incercati din nou!",
                position: "bottomCenter"
              });
            }
            else {
              _.remove(this.locationContacts, e => e.serviceLocationContactId == item.id);
              let idx = this.shownContacts.indexOf(item);
              this.shownContacts.splice(idx, 1);
              this.SetDataSource();
              
            }

          },
          (error) => {
            this.iziToast.error({
              message: "A aparut o eroare, incercati din nou!",
              position: "bottomCenter"
            });
          }
        )
      }

    });
  }

}
