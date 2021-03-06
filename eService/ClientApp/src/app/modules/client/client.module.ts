import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';
import { DemoMaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AgmCoreModule } from '@agm/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/core/date-format';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ServicesComponent } from './services/services.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ClipboardModule } from 'ngx-clipboard';
import { ServiceComponent } from './service/service.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AppointmentComponent } from './service/appointment/appointment.component';
import { NgPipesModule } from 'ng-pipes';
import { ImageViewerClientComponent } from './service/image-viewer-client/image-viewer-client.component';

@NgModule({
  declarations: [ClientLayoutComponent, SearchPageComponent,
                 ServicesComponent, ServiceComponent, AppointmentComponent, ImageViewerClientComponent],
  imports: [
    CommonModule, ClientRoutingModule,
    FlexLayoutModule,  DemoMaterialModule,
    FormsModule,  ReactiveFormsModule,
    Ng2IziToastModule, CoreModule,
    HttpClientModule,  ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU2yqZKf_fmbeMaRMzFUpkJf_ofXmX9Eg'
    }),  NgxMaterialTimepickerModule,
    BarRatingModule, AgmSnazzyInfoWindowModule,
    ClipboardModule, NgPipesModule
  ],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ],
  entryComponents: [
    AppointmentComponent,
    ImageViewerClientComponent
  ]
})
export class ClientModule { }
