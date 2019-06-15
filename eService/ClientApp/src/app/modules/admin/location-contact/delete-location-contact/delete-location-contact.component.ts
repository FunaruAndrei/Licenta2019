import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceLocationContact } from 'src/app/core/models/service-location-contact';

@Component({
  selector: 'app-delete-location-contact',
  templateUrl: './delete-location-contact.component.html',
  styleUrls: ['./delete-location-contact.component.scss']
})
export class DeleteLocationContactComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLocationContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceLocationContact) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
