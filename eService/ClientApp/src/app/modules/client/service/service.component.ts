import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { ServiceDetails } from 'src/app/core/models/service-details';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AppointmentComponent } from './appointment/appointment.component';
import { ServiceProgram } from '../../../core/models/service-program';

import * as _ from 'lodash';
import { CarManufacturer } from '../../../core/models/car-manufacturer';
import { ServiceManufacturer } from '../../../core/models/service-manufacturer';
import { ServiceFacility } from '../../../core/models/service-facility';
import { ServiceLocationFacility } from '../../../core/models/service-location-facility';
import { ServiceOperation } from '../../../core/models/service-operation';
import { ServiceOperationType } from '../../../core/models/service-operation-type';
import { ServiceLocationOperation } from '../../../core/models/service-location-operation';
import { ServiceLocationPhoto } from '../../../core/models/service-location-photo';
import { ImageViewerClientComponent } from './image-viewer-client/image-viewer-client.component';
import { ContactType } from '../../../core/models/contact-type';
import { ServiceLocationContact } from '../../../core/models/service-location-contact';

import { HostListener } from '@angular/core';



enum Days {
  Luni = 1,
  Marti,
  Miercuri,
  Joi,
  Vineri,
  Sambata,
  Duminica
}

interface ShownOperation{
  description: ServiceOperation;
  values: ServiceLocationOperation;
   
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    
    this.scrollHeight = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
  }

  showPhone: boolean = false;

  locationId: number = 0;
  details: ServiceDetails;

  brands: CarManufacturer[] = [];
  facilities: ServiceFacility[] = [];
  operations: ServiceOperation[] = [];
  types: ServiceOperationType[] = [];

  shownTypes: ServiceOperationType[] = [];
  selectedShownType: ServiceOperationType;
  shownOperations: ShownOperation[] = [];
  selectedShownOperations: ShownOperation[] = [];

  contactTypes: ContactType[] = [];
  scrollHeight: number = 0;

  constructor(private route: ActivatedRoute,
    private nomenclatoareService: NomenclatoareService,
    private loaderService: LoaderService,
    private serviceService: ServiceService,
    private _clipboardService: ClipboardService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) {

    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      if (this.locationId > 0) {
        this.GetLocationData();
        this.GetManufacturers();
        this.GetFacilities();
        this.GetOperations();
        this.GetContactTypes();
        this.GetOperationsTypes();
      }
    });
  }

  GetLocationData() {
    this.loaderService.show();
    this.serviceService.GetServices(this.locationId).subscribe(
      (response: ServiceDetails) => {
        this.loaderService.hide();
        this.details = response;



        _.forEach(_.range(1, 8), (e) => {
          if (!_.find(this.details.serviceProgram, z => z.weekDay == e)) {
            this.details.serviceProgram.unshift({
              weekDay: e,
              serviceProgramId: null
            } as ServiceProgram);
          }
        });

        this.details.serviceProgram = _.sortBy(this.details.serviceProgram, e => e.weekDay);

        if (this.operations.length > 0) {
          this.PopulateOperations();
        }

        this.details.serviceReviews.forEach(e => {
          (e as any).toggle = false;
        });

        console.log(this.details);
      }
    );
  }

  GetManufacturers() {
    this.nomenclatoareService.GetCarManufacturers().subscribe((e: CarManufacturer[]) => {
      this.brands = e;
    });
  }

  GetFacilities() {
    this.nomenclatoareService.GetServiceFacilities().subscribe((e: ServiceFacility[]) => {
      this.facilities = e;
    });
  }

  GetOperations() {
    this.nomenclatoareService.GetServiceOperations().subscribe((e: ServiceOperation[]) => {
      this.operations = e;

      if (this.details) {
        this.PopulateOperations();
      }

    });
  }

  GetOperationsTypes() {
    this.nomenclatoareService.GetServiceOperationTypes().subscribe((e: ServiceOperationType[]) => {
      this.types = e;
    });

  }

  GetContactTypes() {
    this.nomenclatoareService.GetContactTypes().subscribe((e: ContactType[]) => {
      this.contactTypes = e;
    });
  }

  PopulateOperations() {
    this.details.serviceOperations.forEach(e => {
      this.shownOperations.push({
        description: this.operations.filter(z => z.serviceOperationId == e.serviceOperationId)[0],
        values: e
      } as ShownOperation);
    });

    this.shownTypes = _.uniqBy(this.shownOperations.map(e => e.description.serviceOperationType), e => e.serviceOperationTypeId);

    this.selectedShownType = this.shownTypes[0];
    this.selectedShownOperations = this.shownOperations.filter(z => z.description.serviceOperationType.serviceOperationTypeId == this.selectedShownType.serviceOperationTypeId);
  }

  ngOnInit() {
    this.GetNomenclatoareData();
  }

  GetNomenclatoareData() { }

  GetLogoSrc() {
    return `https://eservice.blob.core.windows.net/serviceslogo/${this.details.serviceInfo.serviceInfoId}/${this.details.serviceInfo.logo}`;
  }

  GetPhoneNumber() {
    return this.details.serviceContacts.filter(e => e.contactTypeId == 1)[0].value;
  }

  TogglePhone() {
    this.showPhone = !this.showPhone;
    this._clipboardService.copyFromContent(this.details.serviceContacts.filter(e => e.contactTypeId == 1)[0].value);
    this._snackBar.open("Numarul de telefon a fost copiat in clipboard!", null, {
      duration: 3000
    });
  }

  RegisterAppointment() {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '70vw',
      data: {
        details: this.details,
        brands: this.brands,
        opTypes: this.shownTypes,
        op: this.shownOperations
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != undefined && result != null) {
       
      }

    });
  }

  GetWeekDay(program: ServiceProgram) {
    switch (program.weekDay) {
      case Days.Luni:
        return "Luni";
      case Days.Marti:
        return "Marti";
      case Days.Miercuri:
        return "Miercuri";
      case Days.Joi:
        return "Joi";
      case Days.Vineri:
        return "Vineri";
      case Days.Sambata:
        return "Sambata";
      case Days.Duminica:
        return "Duminica";
    }
  }

  GetProgramHours(program: ServiceProgram) {
    if (program.serviceProgramId == null) {
      return "Inchis";
    }

    return `${program.openHour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${program.openMinute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} - ${program.closeHour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${program.closeMinute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`

  }

  GetCarBrandName(brand: ServiceManufacturer) {
    if (this.brands.length > 0) {
      return  this.brands.filter(e => e.carManufacturerId == brand.carManufacturerId)[0].name;
    }
  }

  NotLastBrand(brand: ServiceManufacturer) {
    return !(this.details.serviceManufacturers.map(e => e.carManufacturerId).indexOf(brand.carManufacturerId) == this.details.serviceManufacturers.length - 1);
  }

  GetFacilityName(op: ServiceLocationFacility) {
    if (this.facilities.length > 0) {
      return this.facilities.filter(e => e.serviceFacilityId == op.serviceFacilityId)[0].name;
    }
  }

  GetFacilityIcon(op: ServiceLocationFacility) {
    if (this.facilities.length > 0) {
      return this.facilities.filter(e => e.serviceFacilityId == op.serviceFacilityId)[0].icon;
    }
  }

  GetServiciiActiveClass(type: ServiceOperationType) {
    if (this.selectedShownType == type)
      return "mat-list-item selected-type-active";
    return "mat-list-item";
  }

  SelectServiciiType(type: ServiceOperationType) {
    this.selectedShownType = type;
    this.selectedShownOperations = this.shownOperations.filter(z => z.description.serviceOperationType.serviceOperationTypeId == type.serviceOperationTypeId);
  }

  GetSrcForPhoto(photo: ServiceLocationPhoto) {
    return `https://eservice.blob.core.windows.net/serviceimagesthumbnails/${photo.serviceLocationId}/${photo.link}`;
  }

  OpenImage(photo: ServiceLocationPhoto) {
    const dialogRef = this.dialog.open(ImageViewerClientComponent, {

      data: {
        selected: Object.assign({}, photo),
        allPhotos: Object.assign([], this.details.servicePhotos),
        locationId: this.locationId
      }
    });
  }

  GetTypeForContact(contact: ServiceLocationContact) {
    if (this.details && this.contactTypes.length > 0)
      return this.contactTypes.filter(e => e.contactTypeId == contact.contactTypeId)[0].icon;
    return "";
  }

  OpenGoogleMaps() {
    (window as any).open(`https://maps.google.com/?ll=${this.details.serviceLocation.latitude},${this.details.serviceLocation.longitude}`, '_blank');
  }



 

}
