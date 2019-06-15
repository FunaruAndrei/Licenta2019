import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { LocationFacilitiesService } from './location-facilities.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ServiceLocationFacility } from 'src/app/core/models/service-location-facility';
import { ServiceFacility } from 'src/app/core/models/service-facility';

class ShownFacility {
  id: number;
  icon: string;
  name: string;
  facilityId: number;
}

@Component({
  selector: 'app-location-facilities',
  templateUrl: './location-facilities.component.html',
  styleUrls: ['./location-facilities.component.scss']
})
export class LocationFacilitiesComponent implements OnInit, OnChanges {

  firstTime: boolean = true;
  locationId: number;
  servInfoId: number;
  locationFacilities: ServiceLocationFacility[];

  shownFacilities: ShownFacility[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  _addContact: ServiceLocationFacility;
  displayedColumns: string[] = ['icon', 'name', 'id'];
  dataSource: MatTableDataSource<ShownFacility> = new MatTableDataSource(this.shownFacilities);

  @Input('facilities') facilities: ServiceFacility[];
  hasFacilities: boolean = false;
  
  ngOnChanges() {
    if (this.facilities) {
      this.hasFacilities = true;
      this.firstTime = false;
      this.GetFacilities(this.locationId);
    }
  }

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private facilityService: LocationFacilitiesService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      if (!this.firstTime) {
        this.GetFacilities(this.locationId);
      }
    });
  }

  ngOnInit() {
  }

  GetFacilities(item: number) {
    this.loaderService.show();
    this.locationFacilities = [];
    this.facilityService.GetFacilties(item).subscribe(e => {
      this.loaderService.hide();
      this.locationFacilities = e;

      this.shownFacilities = [];

      this.facilities.forEach(e => {
        this.shownFacilities.push({
          id: this.locationFacilities.filter(z => z.serviceFacilityId == e.serviceFacilityId).length > 0 ?
            this.locationFacilities.filter(z => z.serviceFacilityId == e.serviceFacilityId)[0].serviceLocationFacilityId : 0,
          name: e.name,
          icon: e.icon,
          facilityId: e.serviceFacilityId
        } as ShownFacility);
      });

      
      this.locationFacilities.forEach(e => {
      
      });


      this.SetDataSource();

    });

  }

  SetDataSource() {
    this.dataSource = new MatTableDataSource(this.shownFacilities);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddFacility(element: ShownFacility) {
    this.loaderService.show();
    let fac: ServiceLocationFacility = { serviceFacilityId: element.facilityId, serviceLocationId: this.locationId } as ServiceLocationFacility;
    this.facilityService.SaveFacility(fac).subscribe(e => {
      this.loaderService.hide();

      if (e == 0) {
        this.iziToast.error({
          message: "A aparut o eroare, incercati din nou!",
          position: "bottomCenter"
        });
      } else {

        this.locationFacilities.unshift({ serviceLocationId: this.locationId, serviceFacilityId: element.facilityId, serviceLocationFacilityId: e });

        element.id = e;
        this.iziToast.success({
          message: "Facilitatea a fost adaugata cu succes!",
          position: "bottomCenter"
        });

      }
    });
  }

  DeleteFacility(element: ShownFacility) {
    this.loaderService.show();

    this.facilityService.DeleteFacility(element.id).subscribe(
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
            message: "Facilitatea a fost stearsa cu succes!",
            position: "bottomCenter"
          });
        }
      }
    );
  }

}
