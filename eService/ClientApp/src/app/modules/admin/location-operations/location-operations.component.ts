import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { LocationOperationsService } from './location-operations.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AddLocationOperationComponent } from './add-location-operation/add-location-operation.component';
import { DeleteLocationOperationComponent } from './delete-location-operation/delete-location-operation.component';

import * as _ from 'lodash';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServiceLocationOperation } from 'src/app/core/models/service-location-operation';

interface Data {
  type: string;
  opTypes: ServiceOperationType[];
  op: ServiceOperation[];
  item: ServiceLocationOperation
}

class ShownOperation {
  item: ServiceLocationOperation;
  operation: ServiceOperation;
}

@Component({
  selector: 'app-location-operations',
  templateUrl: './location-operations.component.html',
  styleUrls: ['./location-operations.component.scss']
})
export class LocationOperationsComponent implements OnInit, OnChanges {
  firstTime: boolean = true;
  locationId: number;
  servInfoId: number;

  locationOperations: ServiceLocationOperation[];
  editItem: ShownOperation;
  shownOperation: ShownOperation[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['typeOp', 'op', 'time', 'price', 'actions'];
  dataSource: MatTableDataSource<ShownOperation> = new MatTableDataSource(this.shownOperation);

  @Input('op') op: ServiceOperation[];
  @Input('opTypes') opTypes: ServiceOperationType[];
  hasLoaded: boolean = false;

  ngOnChanges() {
    if (this.op && this.opTypes) {
      this.hasLoaded = true;
      this.firstTime = false;
      this.GetOperations(this.locationId);
    }
  }

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private operationService: LocationOperationsService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));

      if (!this.firstTime) {
        this.GetOperations(this.locationId);
      }

    });
  }
  ngOnInit() {
  }

  GetOperations(locationId: number) {

    this.loaderService.show();
    this.locationOperations = [];
    this.operationService.GetOperations(locationId).subscribe(e => {
      this.loaderService.hide();
      this.locationOperations = e;

      this.shownOperation = [];

      this.locationOperations.forEach(z => {

        let opp = this.op.filter(m => m.serviceOperationId == z.serviceOperationId)[0];

        this.shownOperation.unshift({
          item: z,
          operation: opp
        });

        
      });

      this.SetDataSource();


    });
  }

  SetDataSource() {
    this.dataSource = new MatTableDataSource(this.shownOperation);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddOperation() {
    const dialogRef = this.dialog.open(AddLocationOperationComponent, {
      width: '350px',
      data: {
        type: 'add',
        opTypes: this.opTypes,
        op: this.op.filter(e=> this.locationOperations.map(z=>z.serviceOperationId).indexOf(e.serviceOperationId) == -1),
        item: null
      }
    });

    dialogRef.afterClosed().subscribe((result:Data) => {

     

      if (result != undefined && result != null) {

        if (!result.item.serviceOperationId) {
          this.iziToast.warning({
            message: "Selecteaza un serviciu pentru a putea adauga!",
            position: "bottomCenter"
          });
          return;
        }

        if (!result.item.price) {
          this.iziToast.warning({
            message: "Completeaza un pret pentru a putea adauga!",
            position: "bottomCenter"
          });
          return;
        }

        if (result.item.price <= 0) {
          this.iziToast.warning({
            message: "Pretul trebuie sa fie pozitiv pentru a putea adauga!",
            position: "bottomCenter"
          });
          return;
        }

        if (!result.item.time) {
          this.iziToast.warning({
            message: "Completeaza timpul necesar serviciului pentru a putea adauga!",
            position: "bottomCenter"
          });
          return;
        }

        if (result.item.time <= 0) {
          this.iziToast.warning({
            message: "Timpul trebuie sa fie pozitiv pentru a putea adauga!",
            position: "bottomCenter"
          });
          return;
        }

        this.loaderService.show();

        result.item.serviceLocationId = this.locationId;

        this.operationService.SaveOperation(result.item).subscribe(
          response => {
            this.loaderService.hide();

            if (response == 0) {
              this.iziToast.error({
                message: "A aparut o eroare, va rugam incercati din nou!",
                position: "bottomCenter"
              });
            } else {

              this.iziToast.success({
                message: "Serviciul a fost adaugat cu succes!",
                position: "bottomCenter"
              });

              let item = {
                serviceLocationOperationId: response,
                serviceLocationId: this.locationId,
                serviceOperationId: result.item.serviceOperationId,
                price: result.item.price,
                time: result.item.time
              } as ServiceLocationOperation;

              this.locationOperations.unshift(item);

              this.shownOperation.unshift({
                item: item,
                operation: this.op.filter(z => z.serviceOperationId == item.serviceOperationId)[0]
              });

              this.SetDataSource();

            }

          }
        );


      }

    });

  }

  EditOperation(element: ShownOperation) {

    const dialogRef = this.dialog.open(AddLocationOperationComponent, {
      width: '350px',
      data: {
        type: 'edit',
        opTypes: this.opTypes,
        op: this.op,
        item: Object.assign({}, element.item)
      }
    });

    dialogRef.afterClosed().subscribe((result: Data) => {

      if (result != undefined && result != null) {

        if (!result.item.price) {
          this.iziToast.warning({
            message: "Completeaza un pret pentru a putea edita!",
            position: "bottomCenter"
          });
          return;
        }

        if (result.item.price <= 0) {
          this.iziToast.warning({
            message: "Pretul trebuie sa fie pozitiv pentru a putea edita!",
            position: "bottomCenter"
          });
          return;
        }

        if (!result.item.time) {
          this.iziToast.warning({
            message: "Completeaza timpul necesar serviciului pentru a putea edita!",
            position: "bottomCenter"
          });
          return;
        }

        if (result.item.time <= 0) {
          this.iziToast.warning({
            message: "Timpul trebuie sa fie pozitiv pentru a putea edita!",
            position: "bottomCenter"
          });
          return;
        }

        this.loaderService.show();



        this.operationService.EditOperation(result.item, element.item.serviceLocationOperationId).subscribe(
          response => {
            this.loaderService.hide();

            if (response == false) {
              this.iziToast.error({
                message: "A aparut o eroare, va rugam incercati din nou!",
                position: "bottomCenter"
              });
            } else {

              this.iziToast.success({
                message: "Modificarea a fost efectuata cu succes!",
                position: "bottomCenter"
              });

              element.item.price = result.item.price;
              element.item.time = result.item.time;

            }

          }
        );


      }

    });

  }

  DeleteOperation(item: ShownOperation): void {
    const dialogRef = this.dialog.open(DeleteLocationOperationComponent, {
      width: '250px',
      data: {
        item: item.item,
        op: item.operation
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result != undefined) {

        this.loaderService.show();

        this.operationService.DeleteOperation(item.item.serviceLocationOperationId).subscribe(
          (response) => {
            this.loaderService.hide();

            if (response == false) {
              this.iziToast.error({
                message: "A aparut o eroare, incercati din nou!",
                position: "bottomCenter"
              });
            }
            else {
              _.remove(this.locationOperations, e => e.serviceLocationOperationId == item.item.serviceLocationOperationId);
              _.remove(this.shownOperation, e => e.item.serviceLocationOperationId == item.item.serviceLocationOperationId);
              this.SetDataSource();
            }

          },
          (error) => {
            this.iziToast.error({
              message: "A aparut o eroare, incercati din nou!",
              position: "bottomCenter"
            });
          }
        )
      }

    });
  }

}
