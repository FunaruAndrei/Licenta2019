import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteLocationContactComponent } from '../../location-contact/delete-location-contact/delete-location-contact.component';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServiceLocationOperation } from 'src/app/core/models/service-location-operation';

interface Data {
  item: ServiceLocationOperation,
  op: ServiceOperation
}

@Component({
  selector: 'app-delete-location-operation',
  templateUrl: './delete-location-operation.component.html',
  styleUrls: ['./delete-location-operation.component.scss']
})
export class DeleteLocationOperationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLocationOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
