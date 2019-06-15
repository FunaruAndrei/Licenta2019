import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { LocationImagesService } from './location-images.service';
import { MatDialog } from '@angular/material';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

import * as _ from 'lodash';
import { HttpEventType } from '@angular/common/http';
import { ServiceLocationPhoto } from 'src/app/core/models/service-location-photo';

@Component({
  selector: 'app-location-images',
  templateUrl: './location-images.component.html',
  styleUrls: ['./location-images.component.scss']
})
export class LocationImagesComponent implements OnInit, OnChanges {

  locationId: number;
  servInfoId: number;
  progress: number;

  photos: ServiceLocationPhoto[];

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private imagesService: LocationImagesService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
      
      this.GetImages(this.locationId);
    });
  }

  ngOnChanges() { }

  ngOnInit() {
    
  }

  GetSrc(photo: ServiceLocationPhoto) {
    return `https://eservice.blob.core.windows.net/serviceimagesthumbnails/${this.locationId}/${photo.link}`;
  }

  OpenImage(photo: ServiceLocationPhoto) {
    const dialogRef = this.dialog.open(ImageViewerComponent, {

      data: {
        selected: Object.assign({}, photo),
        allPhotos: Object.assign([], this.photos),
        locationId: this.locationId
      }
    });
  }

  GetImages(id: number) {
    this.loaderService.show();
    this.photos = [];
    this.imagesService.GetPhotos(id).subscribe(e => {
      this.loaderService.hide();

      this.photos = e;
      this.photos = _.sortBy(this.photos, e => e.position);

    });

  }

  DeleteImage(photo: ServiceLocationPhoto) {
    this.loaderService.show();

    this.imagesService.DeletePhoto(photo.serviceLocationPhotoId).subscribe(e => {

      this.loaderService.hide();

      if (e == true) {
        this.iziToast.success({
          message: "Imaginea a fost stearsa cu succes!",
          position: "bottomCenter"
        });
        _.remove(this.photos, e => e.serviceLocationPhotoId == photo.serviceLocationPhotoId);
      } else {
        this.iziToast.error({
          message: "A aparut o eroare, va rugam incercati din nou!",
          position: "bottomCenter"
        });
      }

    });
  }

  displayPhoto(fileInput) {
    
    if (fileInput.length === 0)
      return;

    const formData = new FormData();

    for (let file of fileInput) {
      formData.append(file.name, file);
      var fileName = file.name;
    }
    

    this.imagesService.AddPhotos(formData, this.locationId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.loaderService.hide();
        if (event.body.length > 0) {

          setTimeout(() => {
            this.iziToast.success({
              message: "Au fost adaugate "+ event.body.length + "/" + fileInput.length + " imagini!",
              position: "bottomCenter"
            });
            event.body.forEach(e => this.photos.unshift(e));
          }, 1000 * event.body.length + 3000);

        } else {
          this.iziToast.error({
            message: "A aparut o problema la incarcarea pozei, incercati din nou!",
            position: "bottomCenter"
          });
        }

      }
    });

  }

}
