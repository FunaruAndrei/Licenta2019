import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { DemoMaterialModule } from '../material/material.module';
import { LoaderService } from './loader/loader.service';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderService
  ]
})
export class CoreModule { }
