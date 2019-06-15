import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactType } from 'src/app/core/models/contact-type';
import { ServiceLocationContact } from 'src/app/core/models/service-location-contact';

interface Data {
  types: ContactType[];
  contact: ServiceLocationContact;
}

@Component({
  selector: 'app-add-location-contact',
  templateUrl: './add-location-contact.component.html',
  styleUrls: ['./add-location-contact.component.scss']
})
export class AddLocationContactComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddLocationContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit() {
    if (this.data.contact == null || this.data.contact == undefined) {
      this.data.contact = new ServiceLocationContact();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
