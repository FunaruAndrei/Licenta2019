import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService, User } from 'src/app/core/auth.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { ServiceLocation } from 'src/app/core/models/service-location';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {

  user: User;
  generalInfoCompleted: boolean = false;
  generalInfoId: number;
  locations: ServiceLocation[] = [];

  constructor(private iziToast: Ng2IzitoastService,
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.loaderService.show();
    this.authService.GetUser().subscribe(e => {
      this.user = e;
      this.GetServiceGeneral(e.id);
    });

  }

  GetServiceGeneral(id: number) {
    this.dataService.GetServiceIdByUserId(id).subscribe(
      e => {
        this.loaderService.hide();
        this.generalInfoId = e;
        if (e == 0) {
          this.iziToast.info({
            message: "Informatii service necompletate, va rugam completati aceste informatii!",
            position: "bottomCenter"
          });
          this.router.navigate(['/admin', 'general', e]);
        } else {
          this.GetLocationsList();
          this.generalInfoCompleted = true;
          if (this.router.url.indexOf("location") == -1){
          
            this.router.navigate(['/admin', 'general', e]);
          }
        }

        

      }
    );
  }

  GetLocationsList() {
    this.dataService.GetLocationList(this.generalInfoId).subscribe(e => {
      this.locations = e;
      if (this.locations.length == 0) {
        this.iziToast.info({
          message: "Nu aveti nicio locatie adaugata, va rugam adaugati una pentru a aparea in cautarile clientilor!",
          position: "bottomCenter"
        });
      }
    });
  }

  GoToLocation(item: ServiceLocation) {
  //  this.router.navigateByUrl('/admin/location/' + this.generalInfoId + "/" + item.serviceLocationId);
    this.router.navigate(['/admin', 'location', this.generalInfoId, item.serviceLocationId]);
  }

  AddNewLocation() {
    this.router.navigate(['/admin', 'location', this.generalInfoId,  0]);
  }

  GoToGeneralInfo() {
    this.router.navigate(['/admin', 'general', this.generalInfoId]);
  }

  ngAfterViewInit() {
   
  }

}
