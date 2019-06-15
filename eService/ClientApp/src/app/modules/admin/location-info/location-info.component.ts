import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { LocationInfoService } from './location-info.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { LocInfoMapComponent } from './loc-info-map/loc-info-map.component';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { City } from 'src/app/core/models/city';
import { ServiceLocation } from 'src/app/core/models/service-location';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit, OnChanges {

  id: number;
  servInfoId: number;
  @Input("cities") cities: City[];
  info: ServiceLocation = new ServiceLocation();
  citiesShown: City[];
  
  cityCtrl = new FormControl();
  filteredCities: Observable<City[]>;

  constructor(private locationService: LocationInfoService,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router) {
    this.citiesShown = [];

    route.params.subscribe(val => {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      if (this.id != 0) {

        this.loaderService.show();

        this.locationService.GetLocationInfo(this.id).subscribe(e => {
          this.loaderService.hide();
          if (!e) {
            this.info = new ServiceLocation();
          } else {
            this.info = e;
          }

        });
      } else {
        this.info = new ServiceLocation();
        this.cityCtrl.setValue(null);
      }
    });
    
  }

  ngOnChanges() {
    if (this.cities) {
      this.filteredCities = this.cityCtrl.valueChanges
        .pipe(
          filter( (query: string) => query && query.length > 2),
          map(state => state ? this._filterStates(state) : this.cities.slice())
        );
    }
  }

  private _filterStates(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {

    //if (this.id != 0) {

    //  this.loaderService.show();

    //  this.locationService.GetLocationInfo(this.id).subscribe(e => {
    //    this.loaderService.hide();
    //    if (!e) {
    //      this.info = new ServiceLocation();
    //    } else {
    //      this.info = e;
    //    }

    //  });
    //} else {
    //  this.info = new ServiceLocation();
    //}
  }

  CitySelected(item: City) {
    this.info.latitude = item.latitude;
    this.info.longitude = item.longitude;
  }

  displayFn(city: City) {
    return city ? city.name : null;
  }

  SelectLocationCoords() {
    const dialogRef = this.dialog.open(LocInfoMapComponent, {
     
      data: {
         
        latitude: this.info.latitude ? this.info.latitude : 45.9442858,
        longitude: this.info.longitude ? this.info.longitude : 25.0094303,
        name: this.info.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != undefined) {
        this.info.longitude = result.longitude;
        this.info.latitude = result.latitude;
      }

    });
  }

  SaveData() {
    this.loaderService.show();
    if (this.id == 0) {
      let inf = this.info;
      inf.cityId = inf.city.cityId;
      inf.city = null;
      this.locationService.AddLocationInfo(inf, this.servInfoId).subscribe(e => {
        this.loaderService.hide();
        if (e == 0) {
          this.iziToast.error({
            message: "A aparut o eroare, va rugam incercati din nou!",
            position: "bottomCenter"
          });
        } else {
          this.iziToast.success({
            message: "Modificarile au fost efectuate cu succes!",
            position: "bottomCenter"
          });
          this.router.navigate(['/admin', 'location', this.servInfoId, e]);
        }
      });

    } else {

      this.locationService.EditLocationInfo(this.info, this.id).subscribe(e => {
        this.loaderService.hide();
        if (e == true) {
          this.iziToast.success({
            message: "Modificarile au fost efectuate cu succes!",
            position: "bottomCenter"
          });
        } else {
          this.iziToast.error({
            message: "A aparut o eroare, va rugam incercati din nou!",
            position: "bottomCenter"
          });
        }
      })

    }
  }

}
