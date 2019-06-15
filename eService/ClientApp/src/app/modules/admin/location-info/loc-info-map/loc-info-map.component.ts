import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface Data {
  longitude: number;
  latitude: number;
  name: number;
}

@Component({
  selector: 'app-loc-info-map',
  templateUrl: './loc-info-map.component.html',
  styleUrls: ['./loc-info-map.component.scss']
})
export class LocInfoMapComponent implements OnInit {
  lat: number;
  long: number;
  zoom: number = 15;
  constructor(public dialogRef: MatDialogRef<LocInfoMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit() {
    this.dialogRef.updateSize("80vw", "80vh");
    this.lat = this.data.latitude;
    this.long = this.data.longitude;
  }

  mapClicked(event) {
    this.data.longitude = event.coords.lng;
    this.data.latitude = event.coords.lat;
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

}
