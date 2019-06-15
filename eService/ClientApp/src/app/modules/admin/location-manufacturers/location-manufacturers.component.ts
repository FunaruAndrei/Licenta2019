import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { LocationManufacturersService } from './location-manufacturers.service';
import { ServiceManufacturer } from 'src/app/core/models/service-manufacturer';
import { CarManufacturer } from 'src/app/core/models/car-manufacturer';

class ShownMan {
  id: number;
  icon: string;
  name: string;
  carManufacturerId: number;
}

@Component({
  selector: 'app-location-manufacturers',
  templateUrl: './location-manufacturers.component.html',
  styleUrls: ['./location-manufacturers.component.scss']
})
export class LocationManufacturersComponent implements OnInit, OnChanges {
    ngOnInit(): void {
      
  }
  firstTime: boolean = true;
  locationId: number;
  servInfoId: number;
  locationManufacturers: ServiceManufacturer[];

  shownManufacturers: ShownMan[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  _addContact: ServiceManufacturer;
  displayedColumns: string[] = ['icon', 'name', 'id'];
  dataSource: MatTableDataSource<ShownMan> = new MatTableDataSource(this.shownManufacturers);

  @Input('brands') brands: CarManufacturer[];
  hasBrands: boolean = false;

  ngOnChanges() {
    if (this.brands) {
      this.hasBrands = true;
      this.firstTime = false;
      this.GetManufactures(this.locationId);
    }
  }

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private manufacturersService: LocationManufacturersService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      if (!this.firstTime) {
        this.GetManufactures(this.locationId);
      }

    });
  }

  GetManufactures(locationId: number) {
    this.loaderService.show();
    this.locationManufacturers = [];
    this.manufacturersService.GetManufacturers(locationId).subscribe(e => {
      this.loaderService.hide();
      this.locationManufacturers = e;

      this.shownManufacturers = [];

      this.brands.forEach(e => {
        this.shownManufacturers.push({
          id: this.locationManufacturers.filter(z => z.carManufacturerId == e.carManufacturerId).length > 0 ?
            this.locationManufacturers.filter(z => z.carManufacturerId == e.carManufacturerId)[0].serviceManufacturerId : 0,
          name: e.name,
          icon: e.icon,
          carManufacturerId: e.carManufacturerId
        } as ShownMan);
      });
      this.SetDataSource();
    });
      
    
  }

  SetDataSource() {
    this.dataSource = new MatTableDataSource(this.shownManufacturers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }

  applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddManufacturer(element: ShownMan) {
    this.loaderService.show();
    let fac: ServiceManufacturer = { carManufacturerId: element.carManufacturerId, serviceLocationId: this.locationId} as ServiceManufacturer;
    this.manufacturersService.SaveManufacturer(fac).subscribe(e => {
      this.loaderService.hide();

      if (e == 0) {
        this.iziToast.error({
          message: "A aparut o eroare, incercati din nou!",
          position: "bottomCenter"
        });
      } else {

        this.locationManufacturers.unshift({ serviceLocationId: this.locationId, carManufacturerId: element.carManufacturerId, serviceManufacturerId: e });

        element.id = e;
        this.iziToast.success({
          message: "Brand-ul selectat a fost adaugat cu succes!",
          position: "bottomCenter"
        });

      }
    });
  }

  DeleteManufacturer(element: ShownMan) {
    this.loaderService.show();

    this.manufacturersService.DeleteManufacturer(element.id).subscribe(
      response => {
        this.loaderService.hide();

        if (response == false) {
          this.iziToast.error({
            message: "A aparut o eroare, incercati din nou!",
            position: "bottomCenter"
          });
        }
        else {
          element.id = 0;
          this.iziToast.success({
            message: "Brand-ul selectat a fost sters cu succes!",
            position: "bottomCenter"
          });
        }
      }
    );
  }

}
