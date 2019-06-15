import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { SerivceLocationLayoutComponent } from './serivce-location-layout/serivce-location-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: "general/:id",
        component: GeneralInfoComponent
      },
      {
        path: "location/:infoId/:id",
        component: SerivceLocationLayoutComponent
      
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
