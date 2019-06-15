import { Component, OnInit, OnChanges } from '@angular/core';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';
import { City } from 'src/app/core/models/city';
import { FormControl } from '@angular/forms';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { CarManufacturer } from 'src/app/core/models/car-manufacturer';
import { SearchPageService } from './search-page.service';
import { SearchPageCounter } from 'src/app/core/models/search-page-counter';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { AuthService, User } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnChanges {

  judete: City[];
  cities: City[];
  opTypes: ServiceOperationType[];
  selectedType: ServiceOperationType;
  operations: ServiceOperation[];
  filteredOperations: ServiceOperation[];
  brands: CarManufacturer[];

  longitude: number;
  latitude: number;
  typeSelected: ServiceOperationType;
  brandSelected: CarManufacturer;

  user: User = null;

  serviceCount: number = 0;
  vulcanizareCount: number = 0;
  spalatoriiCount: number = 0;

  cityCtrl = new FormControl();
  filteredCities: Observable<City[]>;
  typeCtrl = new FormControl();
  filteredTypes: Observable<ServiceOperationType[]>
  brandCtrl = new FormControl();
  filteredBrands: Observable<CarManufacturer[]>;

  constructor(private nomenclatoareService: NomenclatoareService,
    private searchPageService: SearchPageService,
    private auth: AuthService,
    private router: Router,
    private iziToast: Ng2IzitoastService) { }

  ngOnInit() {

    if (window.navigator.geolocation) {
      let x;
      window.navigator.geolocation.getCurrentPosition(e => {

        this.longitude = e.coords.longitude;
        this.latitude = e.coords.latitude;

        
        
      });
    };
  

    this.GetUser();
    this.GetJudete();
    this.GetOperationTypes();
    this.GetCarManufacturers();
    this.GetOperations();
    this.GetCounters();

    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        filter((query: string) => query && query.length > 2),
      map(state => state ? this._filter(state) : this.cities.slice())
    );
    

  }

  GoToServices() {

    if (!this.longitude || !this.latitude) {
      this.iziToast.warning({
        message: "Trebuie sa selectezi un oras pentru a cauta!",
        position: "bottomCenter"
      });
      return;
    }

    let x = {
      longitude: this.longitude,
      latitude: this.latitude
    };

    if (this.typeSelected) {
      x["type"] = this.typeSelected.serviceOperationTypeId;
    }

    if (this.brandSelected) {
      x["brand"] = this.brandSelected.carManufacturerId;
    }


    this.router.navigate(["/services"], { queryParams: x });
  }

  ngOnChanges() {
  }

  private _filter(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOp(value: string): ServiceOperationType[] {
    const filterValue = value.toLowerCase();

    return this.opTypes.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterBrand(value: string): CarManufacturer[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }



  CitySelected(item: City) {
    this.latitude = item.latitude;
    this.longitude = item.longitude;
  }

  TypeSelected(item: ServiceOperationType) {
    this.typeSelected = item;
  }

  BrandSelected(item: CarManufacturer) {
    this.brandSelected = item;
  }

  displayFn(entity) {
    return entity?entity.name : null;
  }

  GetUser() {
    this.auth.GetUser().subscribe(e => {
      if (e) {
        this.user = e;
      }
    });
  }

  GetOperations() {
    this.nomenclatoareService.GetServiceOperations().subscribe((response: ServiceOperation[]) => {
      this.operations = response;
      this.filteredOperations = this.operations.filter(e => e.serviceOperationType.serviceOperationTypeId == 1);
    });
  }

  GetJudete() {

    this.nomenclatoareService.GetCities().subscribe((e: City[]) => {

      this.cities = e;

      let x = this.cities.filter(z => z.latitude == (Math.round(this.latitude * 100) / 100) && z.longitude == (Math.round(this.longitude * 100) / 100) )[0];

      if (x) {
        this.cityCtrl.setValue(x);
      }

      this.judete = e.filter(z => z.name.indexOf(z.judet) >= 0);
    });

  }

  SelectType(type: ServiceOperationType) {
    this.selectedType = type;
    this.filteredOperations = this.operations.filter(e => e.serviceOperationType.serviceOperationTypeId == type.serviceOperationTypeId);
  }

  GetOperationTypes() {
    this.nomenclatoareService.GetServiceOperationTypes().subscribe((e: ServiceOperationType[]) => {
      this.opTypes = e;
      this.selectedType = this.opTypes[0];

      this.filteredTypes = this.typeCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterOp(name) : this.opTypes.slice())
        );

    });
  }

  GetCarManufacturers() {
    this.nomenclatoareService.GetCarManufacturers().subscribe((e: CarManufacturer[]) => {
      this.brands = e;

      this.filteredBrands = this.brandCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterBrand(name) : this.brands.slice())
        );

    });
  }

  GetCounters() {
    this.searchPageService.GetCountersStats().subscribe((response: SearchPageCounter[]) => {
      this.serviceCount = response.filter(e => e.id == 1)[0].count;
      this.spalatoriiCount = response.filter(e => e.id == 3)[0].count;
      this.vulcanizareCount = response.filter(e => e.id == 2)[0].count;
    });
  }

}
