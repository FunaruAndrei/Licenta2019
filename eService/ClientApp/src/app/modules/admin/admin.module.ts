import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

import { Ng2IziToastModule } from 'ng2-izitoast';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { DemoMaterialModule } from 'src/app/material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/core/date-format';
import { GeneralInfoComponent, LogoViewerComponent } from './general-info/general-info.component';
import { GeneralInfoService } from './general-info/general-info.service';
import { HttpClientModule } from '@angular/common/http';
import { SerivceLocationLayoutComponent } from './serivce-location-layout/serivce-location-layout.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { LocationContactComponent } from './location-contact/location-contact.component';
import { LocationProgramComponent } from './location-program/location-program.component';
import { LocationFacilitiesComponent } from './location-facilities/location-facilities.component';
import { LocationManufacturersComponent } from './location-manufacturers/location-manufacturers.component';
import { LocationOperationsComponent } from './location-operations/location-operations.component';
import { LocationImagesComponent } from './location-images/location-images.component';
import { LocationPromotionsComponent } from './location-promotions/location-promotions.component';
import { LocationInfoService } from './location-info/location-info.service';

import { AgmCoreModule } from '@agm/core';
import { LocInfoMapComponent } from './location-info/loc-info-map/loc-info-map.component';
import { AddLocationContactComponent } from './location-contact/add-location-contact/add-location-contact.component';
import { DeleteLocationContactComponent } from './location-contact/delete-location-contact/delete-location-contact.component';
import { LocationManufacturersService } from './location-manufacturers/location-manufacturers.service';
import { LocationFacilitiesService } from './location-facilities/location-facilities.service';
import { LocationContactService } from './location-contact/location-contact.service';
import { AddLocationOperationComponent } from './location-operations/add-location-operation/add-location-operation.component';
import { DeleteLocationOperationComponent } from './location-operations/delete-location-operation/delete-location-operation.component';
import { ImageViewerComponent } from './location-images/image-viewer/image-viewer.component';


@NgModule({
  declarations: [AdminLayoutComponent, GeneralInfoComponent, LogoViewerComponent, SerivceLocationLayoutComponent, LocationInfoComponent, LocationContactComponent, LocationProgramComponent, LocationFacilitiesComponent, LocationManufacturersComponent, LocationOperationsComponent, LocationImagesComponent, LocationPromotionsComponent, LocInfoMapComponent, AddLocationContactComponent, DeleteLocationContactComponent, AddLocationOperationComponent, DeleteLocationOperationComponent, ImageViewerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
    CoreModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU2yqZKf_fmbeMaRMzFUpkJf_ofXmX9Eg'
    }),
    NgxMaterialTimepickerModule
  ],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    },
    GeneralInfoService,
    LocationInfoService,
    LocationManufacturersService,
    LocationFacilitiesService,
    LocationContactService
  ],
  entryComponents: [
    LogoViewerComponent,
    LocInfoMapComponent,
    AddLocationContactComponent,
    DeleteLocationContactComponent,
    AddLocationOperationComponent,
    DeleteLocationOperationComponent,
    ImageViewerComponent
  ]
})
export class AdminModule { }
