import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { ServiceDetails } from 'src/app/core/models/service-details';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AppointmentComponent } from './appointment/appointment.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  showPhone: boolean = false;

  locationId: number = 0;
  details: ServiceDetails;

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
      }
    });
  }

  GetLocationData() {
    this.loaderService.show();
    this.serviceService.GetServices(this.locationId).subscribe(
      (response: ServiceDetails) => {
        this.loaderService.hide();
        this.details = response;
        console.log(this.details);
      }
    );
  }

  ngOnInit() {
    this.GetNomenclatoareData();
  }

  GetNomenclatoareData() { }

  GetLogoSrc() {
    return `https://eservice.blob.core.windows.net/serviceslogothumbnails/${this.details.serviceInfo.serviceInfoId}/${this.details.serviceInfo.logo}`;
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
      width: '350px',
      data: {
      
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != undefined && result != null) {
       

      }

    });
  }

}
