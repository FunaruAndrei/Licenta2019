import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { CarManufacturer } from 'src/app/core/models/car-manufacturer';
import { City } from 'src/app/core/models/city';
import { ServiceFacility } from 'src/app/core/models/service-facility';
import { ContactType } from 'src/app/core/models/contact-type';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';

@Component({
  selector: 'app-serivce-location-layout',
  templateUrl: './serivce-location-layout.component.html',
  styleUrls: ['./serivce-location-layout.component.scss']
})
export class SerivceLocationLayoutComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
      this.LoadDate();
    }

  carManufacturers: CarManufacturer[];
  cities: City[];
  serviceFacilities: ServiceFacility[];
  contactTypes: ContactType[];
  serviceOperations: ServiceOperation[];
  serviceOperationTypes: ServiceOperationType[];

  locationId: number;
  generalInfoId: number;

  constructor(private route: ActivatedRoute,
    private locationService: DataService,
    private nomenclatoareService: NomenclatoareService,
    private loaderService: LoaderService
  ) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.generalInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      if (!this.locationId) {
        this.locationId = 0;
      }
    });
  }

  ngOnInit() {
    this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.generalInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
    if (!this.locationId) {
      this.locationId = 0;
    }
  }

  LoadDate() {
    this.loaderService.showMultiple(6);

    this.nomenclatoareService.GetCarManufacturers().subscribe(e => {
      this.carManufacturers = e;
      this.loaderService.hide();
    });

    this.nomenclatoareService.GetCities().subscribe(e => {
      this.cities = e;
      this.loaderService.hide();
    });

    this.nomenclatoareService.GetContactTypes().subscribe(e => {
      this.contactTypes = e;
      this.loaderService.hide();
    });

    this.nomenclatoareService.GetServiceFacilities().subscribe(e => {
      this.serviceFacilities = e;
      this.loaderService.hide();
    });

    this.nomenclatoareService.GetServiceOperations().subscribe(e => {
      this.serviceOperations = e;
      this.loaderService.hide();
    });

    this.nomenclatoareService.GetServiceOperationTypes().subscribe(e => {
      this.serviceOperationTypes = e;
      this.loaderService.hide();
    });

  }

}
