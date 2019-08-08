import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, startWith, map } from 'rxjs/operators';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { City } from 'src/app/core/models/city';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CarManufacturer } from 'src/app/core/models/car-manufacturer';
import { ServiceFacility } from 'src/app/core/models/service-facility';
import * as _ from 'lodash';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServicesService } from './services.service';
import { ServicesClientRequest } from 'src/app/core/models/services-client-request';
import { ServiceClient } from 'src/app/core/models/services-client';


class ParamsObject {
  longitude: number;
  latitude: number;
  type: number;
  brand: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  cities: City[];
  cityCtrl = new FormControl();
  filteredCities: Observable<City[]>;
  selectedCity: City;

  operationTypes: ServiceOperationType[];
  selectedType: ServiceOperationType;
  filteredTypes: Observable<ServiceOperationType[]>;
  typeCtrl: FormControl = new FormControl();

  brands: CarManufacturer[];
  filteredBrands: Observable<CarManufacturer[]>;
  brandCtrl: FormControl = new FormControl();
  selectedBrand: CarManufacturer;

  facilities: ServiceFacility[] = [];
  facilityCtrl = new FormControl();
  selectedFacilities: ServiceFacility[] = [];

  distances: number[] = [5, 10, 15, 20, 25, 30];
  selectedDistance: number = 25;

  operations: ServiceOperation[];
  filteredOperations: ServiceOperation[];
  operationCtrl = new FormControl();
  selectedOperations: ServiceOperation[] = [];

  queryUrl: ParamsObject = new ParamsObject();

  services: ServiceClient[];


  showMap: boolean = false;

  constructor(private route: ActivatedRoute,
    private nomenclatoareService: NomenclatoareService,
    private loaderService: LoaderService,
    private servicesService: ServicesService) {

    this.GetNomenclatoare();

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let orderObj: ParamsObject = ({ ...params } as any).params as any;

      if (orderObj.latitude) {
        this.queryUrl.latitude = parseFloat(orderObj.latitude as any);
      }

      if (orderObj.longitude) {
        this.queryUrl.longitude = parseFloat(orderObj.longitude as any);
      }

      if (orderObj.type) {
        this.queryUrl.type = orderObj.type;
      }


      if (orderObj.brand) {
        this.queryUrl.brand = orderObj.brand;
      }

      if (window.navigator.geolocation) {
        let x;
        window.navigator.geolocation.getCurrentPosition(e => {
          let m: City = {
            cityId: -1,
            judet: "Locatie actuala",
            name: "Locatie actuala",
            judetAuto: "",
            latitude: e.coords.latitude,
            longitude: e.coords.longitude
          };
          
          if (this.queryUrl.latitude == e.coords.latitude && this.queryUrl.longitude == e.coords.longitude) {
            this.selectedCity = m;
            this.cityCtrl.setValue(this.selectedCity);
          }

        });
      }


      this.GetServices();
        
    });
  }

  GetServices() {
    this.loaderService.show();

    let x: ServicesClientRequest = {
      longitude: this.queryUrl.longitude,
      latitude: this.queryUrl.latitude,
      carManId: this.selectedBrand ? this.selectedBrand.carManufacturerId : null,
      distance: this.selectedDistance,
      opTypeId: this.selectedType ? this.selectedType.serviceOperationTypeId : null,
      facilites: this.selectedFacilities.map(e => e.serviceFacilityId),
      operations: this.selectedOperations.map(e => e.serviceOperationId)
    };
    this.services = [];
    this.servicesService.GetServices(x).subscribe((response: ServiceClient[]) => {
      this.loaderService.hide();

      this.services = response;

    });
  }

  GetSrcForService(service: ServiceClient) {
    return `https://eservice.blob.core.windows.net/serviceimagesthumbnails/${service.locationId}/${service.image}`;
  }

  GetNomenclatoare() {

    this.GetCities();
    this.GetOperationTypes();
    this.GetCarManufacturers();
    this.GetFacilities();
    this.GetOperations();

  }

  CitySelected(item: City) {
    this.queryUrl.latitude = item.latitude;
    this.queryUrl.longitude = item.longitude;
  }

  GetOperations() {
    this.loaderService.show();

    this.nomenclatoareService.GetServiceOperations().subscribe((e: ServiceOperation[]) => {
      this.loaderService.hide();

      this.operations = e;
      this.filteredOperations = e;
      if (this.selectedType) {
        this.filteredOperations = this.operations.filter(z => z.serviceOperationType.serviceOperationTypeId == this.selectedType.serviceOperationTypeId);
      }

    });
  }

  selectedOperation(item: ServiceOperation) {

    this.selectedOperations.unshift(item);
    _.remove(this.filteredOperations, item);

  }

  removeOperation(item: ServiceOperation) {
    this.filteredOperations.unshift(item);
    _.remove(this.selectedOperations, item);
  }

  GetFacilities() {
    this.loaderService.show();
    this.nomenclatoareService.GetServiceFacilities().subscribe((e: ServiceFacility[]) => {
      this.loaderService.hide();

      this.facilities = e;

    });
  }
  selectedFacility(item: ServiceFacility) {

    if (!_.includes(this.selectedFacilities, item)) {
      this.selectedFacilities.unshift(item);
    }

   
  }

  removeFacility(facility: ServiceFacility) {
    _.remove(this.selectedFacilities, facility);
  }

  GetCities() {
    this.loaderService.show();
    this.nomenclatoareService.GetCities().subscribe(
      (response: City[]) => {
        this.loaderService.hide();
        this.cities = response;

        if (this.queryUrl.latitude && this.queryUrl.longitude) {

          if (!this.selectedCity) {
            this.selectedCity = this.cities.filter(z => z.longitude == this.queryUrl.longitude && z.latitude == this.queryUrl.latitude)[0];
            this.cityCtrl.setValue(this.selectedCity);
          }
        }

        this.filteredCities = this.cityCtrl.valueChanges
          .pipe(
            filter((query: string) => query && query.length > 2),
            map(state => state ? this._filter(state) : this.cities.slice())
          );

      }
    );
  }


  GetOperationTypes() {
    this.nomenclatoareService.GetServiceOperationTypes().subscribe((e: ServiceOperationType[]) => {
      this.operationTypes = e;

      if (this.queryUrl.type) {
        this.selectedType = this.operationTypes.filter(z => z.serviceOperationTypeId == this.queryUrl.type)[0];
        this.typeCtrl.setValue(this.selectedType);
      }

      this.filteredTypes = this.typeCtrl.valueChanges
        .pipe(
          startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterOp(name) : this.operationTypes.slice())
        );

    });
  }


  GetCarManufacturers() {
    this.nomenclatoareService.GetCarManufacturers().subscribe((e: CarManufacturer[]) => {
      this.brands = e;

      if (this.queryUrl.brand) {
        this.selectedBrand = this.brands.filter(z => z.carManufacturerId == this.queryUrl.brand)[0];
        this.brandCtrl.setValue(this.selectedBrand);
      }

      this.filteredBrands = this.brandCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterBrand(name) : this.brands.slice())
        );

    });
  }


  private _filter(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  

  private _filterOp(value: string): ServiceOperationType[] {
    const filterValue = value.toLowerCase();

    return this.operationTypes.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterBrand(value: string): CarManufacturer[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(entity) {
    return entity ? entity.name : null;
  }

}
