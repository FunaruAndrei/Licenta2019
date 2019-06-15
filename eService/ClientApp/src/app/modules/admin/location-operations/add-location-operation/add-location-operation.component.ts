import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServiceLocationOperation } from 'src/app/core/models/service-location-operation';

interface Data {
  type: string;
  opTypes: ServiceOperationType[];
  op: ServiceOperation[];
  item: ServiceLocationOperation
}

@Component({
  selector: 'app-add-location-operation',
  templateUrl: './add-location-operation.component.html',
  styleUrls: ['./add-location-operation.component.scss']
})
export class AddLocationOperationComponent implements OnInit {

  typeOpControl = new FormControl();
  opControl = new FormControl();

  selectedOpType: ServiceOperationType;
  selectedOp: ServiceOperation;

  shownOp: ServiceOperation[] = [];

  filteredOptionsOpType: Observable<ServiceOperationType[]>;
  filteredOptionsOp: Observable<ServiceOperation[]>;

  constructor(public dialogRef: MatDialogRef<AddLocationOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit() {
    if (this.data.item == null || this.data.item == undefined) {
      this.data.item = new ServiceLocationOperation();
      this.selectedOpType = this.data.opTypes[0];
      this.shownOp = this.data.op.filter(e => e.serviceOperationType.serviceOperationTypeId == this.selectedOpType.serviceOperationTypeId);
    } else {
      this.selectedOp = this.data.op.filter(e => e.serviceOperationId == this.data.item.serviceOperationId)[0];
      this.selectedOpType = this.data.op.filter(e => e.serviceOperationId == this.data.item.serviceOperationId)[0].serviceOperationType;
    }

    this.filteredOptionsOpType = this.typeOpControl.valueChanges
      .pipe(
        startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.data.opTypes.slice())
    );

    this.filteredOptionsOp = this.opControl.valueChanges
      .pipe(
        startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterOp(name) : this.shownOp.slice())
      );

   
  }

  OnTypeSelected(event) {
    this.shownOp = this.data.op.filter(e => e.serviceOperationType.serviceOperationTypeId == event.serviceOperationTypeId);
  }

  OnOperationSelected(event: ServiceOperation) {

    this.data.item.serviceOperationId = event.serviceOperationId;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.data.opTypes.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOp(name: string) {
    const filterValue = name.toLowerCase();

    return this.shownOp.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFnType(item) {
    return item.name;
  }

}
