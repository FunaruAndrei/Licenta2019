import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceLocationPhoto } from '../../../../core/models/service-location-photo';

interface DialogData {
  selected: ServiceLocationPhoto;
  allPhotos: ServiceLocationPhoto[];
  locationId: number
}

@Component({
  selector: 'app-image-viewer-client',
  templateUrl: './image-viewer-client.component.html',
  styleUrls: ['./image-viewer-client.component.scss']
})
export class ImageViewerClientComponent {

  logo: string;

  constructor(
    public dialogRef: MatDialogRef<ImageViewerClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

  GetSrc(photo: ServiceLocationPhoto) {
    return `https://eservice.blob.core.windows.net/serviceimages/${this.data.locationId}/${photo.link}`;
  }

  MoveLeft() {

    let idx = this.data.allPhotos.map(e => e.serviceLocationPhotoId).indexOf(this.data.selected.serviceLocationPhotoId);
    if (idx == 0) {
      this.data.selected = this.data.allPhotos[this.data.allPhotos.length - 1];
    } else {
      this.data.selected = this.data.allPhotos[idx - 1];
    }
  }

  MoveRight() {
    let idx = this.data.allPhotos.map(e => e.serviceLocationPhotoId).indexOf(this.data.selected.serviceLocationPhotoId);
    if (idx == this.data.allPhotos.length - 1) {
      this.data.selected = this.data.allPhotos[0];
    } else {
      this.data.selected = this.data.allPhotos[idx + 1];
    }
  }



  CloseDialog(): void {
    this.dialogRef.close();
  }

}
