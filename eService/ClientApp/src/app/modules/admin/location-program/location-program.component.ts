import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationProgramService } from './location-program.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ServiceProgram } from 'src/app/core/models/service-program';

class Day {
  dayId: number;
  dayName: string;
}

class ShownProgram {
  public dayId: number;
  public dayName: string;
  public open: string;
  public close: string;
  public locProgId: number;
}

@Component({
  selector: 'app-location-program',
  templateUrl: './location-program.component.html',
  styleUrls: ['./location-program.component.scss']
})
export class LocationProgramComponent implements OnInit {

  days: Day[] = [
    {
      dayId: 1,
      dayName: "Luni"
    },
    {
      dayId: 2,
      dayName: "Marti"
    },
    {
      dayId: 3,
      dayName: "Miercuri"
    },
    {
      dayId: 4,
      dayName: "Joi"
    },
    {
      dayId: 5,
      dayName: "Vineri"
    },
    {
      dayId: 6,
      dayName: "Sambata"
    },
    {
      dayId: 7,
      dayName: "Duminica"
    }
  ];

  locationId: number;
  servInfoId: number;
  locationProgram: ServiceProgram[];
  editItem: ShownProgram;
  editItemBack: ShownProgram = {} as ShownProgram;
  shownProgram: ShownProgram[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  _addContact: ServiceProgram;
  displayedColumns: string[] = ['dayName', 'open', 'close', 'actions'];
  dataSource: MatTableDataSource<ShownProgram> = new MatTableDataSource(this.shownProgram);

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private programService: LocationProgramService,
    private dialog: MatDialog) {
    route.params.subscribe(val => {
      this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
      this.servInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));

      this.GetProgram(this.locationId);
    });
  }

  ngOnInit() {
    
  }

  GetProgram(item: number) {

    this.loaderService.show();
    this.locationProgram = [];
    this.programService.GetProgram(item).subscribe(e => {
      this.loaderService.hide();
      this.locationProgram = e;

      this.shownProgram = [];

      this.days.forEach(z => {
        let it = this.locationProgram.filter(m => m.weekDay == z.dayId)[0];
        if (it) {
          this.shownProgram.push({
            dayId: z.dayId,
            dayName: z.dayName,
            locProgId: it.serviceProgramId,
            open: it.openHour + ":" + it.openMinute,
            close: it.closeHour + ":" + it.closeMinute
          });
        } else {
          this.shownProgram.push({
            dayId: z.dayId,
            dayName: z.dayName,
            open: "",
            close: "",
            locProgId: 0
          });
        }
      });

      this.SetDataSource();

    });
  }

  SetDataSource() {
    this.dataSource = new MatTableDataSource(this.shownProgram);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddProgram(element: ShownProgram) {
    this.editItem = element;
  }

  EditProgram(element: ShownProgram) {
    this.editItem = element;
  }

  SelectEdit(element: ShownProgram) {
    this.editItem = element;
    Object.assign(this.editItemBack, element);

  }

  CloseEdit(element: ShownProgram) {

    this.editItem = null;
  }

  ConfirmAddEdit(element: ShownProgram) {
    if (this.editItem.locProgId == 0) {
      this.ConfirmAdd(element);
    } else {
      this.ConfirmEdit(element);
    }
  }

  ConfirmEdit(element: ShownProgram) {

    this.loaderService.show();
    let elem = {
      weekDay: element.dayId,
      openHour: parseInt(this.editItem.open.split(":")[0]),
      openMinute: parseInt(this.editItem.open.split(":")[1]),
      closeHour: parseInt(this.editItem.close.split(":")[0]),
      closeMinute: parseInt(this.editItem.close.split(":")[1]),
      serviceProgramId: element.locProgId,
      serviceLocationId: this.locationId
    } as ServiceProgram;
    this.programService.EditProgram(elem, element.locProgId).subscribe(e => {

      this.loaderService.hide();
      if (e == false) {
        this.iziToast.error({
          message: "A aparut o eroare, incercati din nou!",
          position: "bottomCenter"
        });
      } else {

        this.iziToast.success({
          message: "Programul pentru ziua selectata a fost adaugat cu succes!",
          position: "bottomCenter"
        });
        element.open = this.editItem.open;
        element.close = this.editItem.close;

        let x = this.locationProgram.filter(z => z.serviceProgramId == element.locProgId)[0];
        x.openHour = elem.openHour;
        x.openMinute = elem.openMinute;
        x.closeHour = elem.closeHour;
        x.closeMinute = elem.closeMinute;

        this.editItem = null;
      }

    });

  }

  ConfirmAdd(element: ShownProgram) {

    this.loaderService.show();
    let elem = {
      weekDay: element.dayId,
      openHour: parseInt(this.editItem.open.split(":")[0]),
      openMinute: parseInt(this.editItem.open.split(":")[1]),
      closeHour: parseInt(this.editItem.close.split(":")[0]),
      closeMinute: parseInt(this.editItem.close.split(":")[1]),
      serviceProgramId: 0,
      serviceLocationId: this.locationId
    } as ServiceProgram;
    this.programService.SaveProgram(elem).subscribe(e => {
      this.loaderService.hide();

      if (e == 0) {
        this.iziToast.error({
          message: "A aparut o eroare, incercati din nou!",
          position: "bottomCenter"
        });
      } else {
        this.iziToast.success({
          message: "Programul pentru ziua selectata a fost adaugat cu succes!",
          position: "bottomCenter"
        });

        element.open = this.editItem.open;
        element.close = this.editItem.close;
        element.locProgId = e;
        elem.serviceProgramId = e;

        this.locationProgram.unshift(elem);

        this.editItem = null;

      }
    });

  }

  Console(item) {
    console.log(item);
  }
  GetValue(element) {
    return element.open;
  }

}
