import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarManufacturer } from './models/car-manufacturer';
import { City } from './models/city';
import { ContactType } from './models/contact-type';
import { ServiceFacility } from './models/service-facility';
import { ServiceOperationType } from './models/service-operation-type';
import { ServiceOperation } from './models/service-operation';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NomenclatoareService {

  baseUrl: string;

  private _carManufacturers: CarManufacturer[];
  private _cities: City[];
  private _contactTypes: ContactType[];
  private _serviceFacilities: ServiceFacility[];
  private _serviceOperationTypes: ServiceOperationType[];
  private _serviceOperations: ServiceOperation[];

  constructor(private http: HttpClient) {
    this.baseUrl = "/api/Nomenclatoare";

    this._carManufacturers = [];
    this._cities = [];
    this._contactTypes = [];
    this._serviceFacilities = [];
    this._serviceOperationTypes = [];
    this._serviceOperations = [];

  }

  GetCarManufacturers(): Observable<CarManufacturer[]> {

    if (this._carManufacturers.length > 0) {
      return of(this._carManufacturers);
    }

    return this.http.get<CarManufacturer[]>(this.baseUrl + "/GetCarManufacturers").pipe(
      tap(x => this._carManufacturers = x),
    );
  }

  GetCities(): Observable<City[]> {

    if (this._cities.length > 0) {
      return of(this._cities);
    }

    return this.http.get<City[]>(this.baseUrl + "/GetCities").pipe(
      tap(x => this._cities = x),
    );
  }

  GetContactTypes(): Observable<ContactType[]> {

    if (this._contactTypes.length > 0) {
      return of(this._contactTypes);
    }

    return this.http.get<ContactType[]>(this.baseUrl + "/GetContactTypes").pipe(
      tap(x => this._contactTypes = x),
    );
  }

  GetServiceFacilities(): Observable<ServiceFacility[]> {

    if (this._serviceFacilities.length > 0) {
      return of(this._serviceFacilities);
    }

    return this.http.get<ServiceFacility[]>(this.baseUrl + "/GetServiceFacilities").pipe(
      tap(x => this._serviceFacilities = x),
    );
  }

  GetServiceOperationTypes(): Observable<ServiceOperationType[]> {

    if (this._serviceOperationTypes.length > 0) {
      return of(this._serviceOperationTypes);
    }

    return this.http.get<ServiceOperationType[]>(this.baseUrl + "/GetServiceOperationTypes").pipe(
      tap(x => this._serviceOperationTypes = x),
    );
  }

  GetServiceOperations(): Observable<ServiceOperation[]> {

    if (this._serviceOperations.length > 0) {
      return of(this._serviceOperations);
    }

    return this.http.get<ServiceOperation[]>(this.baseUrl + "/GetServiceOperations").pipe(
      tap(x => this._serviceOperations = x),
    );
  }

}
