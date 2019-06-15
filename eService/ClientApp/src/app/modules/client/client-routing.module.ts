import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: SearchPageComponent
      }, {
        path: "services",
        component: ServicesComponent
        
      },
      {
        path: "service/:id",
        component: ServiceComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
