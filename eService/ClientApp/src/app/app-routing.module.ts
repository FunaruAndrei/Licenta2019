import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';

const routes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'client', loadChildren: () => ClientModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
