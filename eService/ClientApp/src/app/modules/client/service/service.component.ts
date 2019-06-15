import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';
import { NomenclatoareService } from 'src/app/core/nomenclatoare.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { ServiceDetails } from 'src/app/core/models/service-details';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  locationId: number = 0;
  details: ServiceDetails;

  constructor(private route: ActivatedRoute,
    private nomenclatoareService: NomenclatoareService,
    private loaderService: LoaderService,
    private serviceService: ServiceService) {

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

}
