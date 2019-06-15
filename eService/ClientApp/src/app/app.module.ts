import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { BarRatingModule } from "ngx-bar-rating";

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Ng2IziToastModule } from 'ng2-izitoast';

import { AppDateAdapter, APP_DATE_FORMATS } from './core/date-format';
import { DemoMaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoaderComponent } from './core/loader/loader.component';
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ClientModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    OverlayModule,
    BarRatingModule,
    Ng2IziToastModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule { }
