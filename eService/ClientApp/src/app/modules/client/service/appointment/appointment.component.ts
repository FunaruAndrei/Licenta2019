import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceDetails } from '../../../../core/models/service-details';

import * as _ from 'lodash';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CarManufacturer } from '../../../../core/models/car-manufacturer';
import { Months } from '../../../../core/models/months';
import { AuthService, User } from 'src/app/core/auth.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { Appointment } from 'src/app/core/models/appointment';
import { ServiceOperationType } from 'src/app/core/models/service-operation-type';
import { ServiceOperation } from 'src/app/core/models/service-operation';
import { ServiceLocationOperation } from 'src/app/core/models/service-location-operation';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ServiceService } from '../service.service';

interface ShownOperation {
  description: ServiceOperation;
  values: ServiceLocationOperation;

}

interface ModalData {
  details: ServiceDetails,
  opTypes: ServiceOperationType[],
  op: ShownOperation[],
  brands: CarManufacturer[]
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  typeOpControl = new FormControl();
  opControl = new FormControl();

  selectedOpType: ServiceOperationType;
  selectedOp: ShownOperation;

  shownOp: ShownOperation[] = [];

  filteredOptionsOpType: Observable<ServiceOperationType[]>;
  filteredOptionsOp: Observable<ShownOperation[]>;

  today: Date = new Date();
  years: number[];
  yearSelected: number = (new Date()).getFullYear();
  yearFormControl: FormControl = new FormControl();
  filteredYears: Observable<number[]>;

  brandCtrl = new FormControl();
  filteredBrands: Observable<CarManufacturer[]>;
  brandSelected: CarManufacturer;

  carModel: string;
  months: string[] = [];
  selectedMonth: string = Months[this.today.getMonth() + 1];

  days: number[] = [];
  selectedDay: number;

  hours: string[] = [];
  selectedHour: string;

  numarTelefon: string;
  email: string;

  addAppointment: Appointment = new Appointment();
  user: User;
  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private authService: AuthService,
    private loaderService: LoaderService,
    private iziToast: Ng2IzitoastService,
    private service: ServiceService) {
    console.log(data);

    this.years = _.reverse(_.range(1970, this.yearSelected));
    this.yearFormControl.setValue(this.yearSelected);
    this.addAppointment.serviceLocation = this.data.details.serviceLocation;
    this.authService.GetUser().subscribe(e => {
      this.user = e;
      if (this.user) {
        this.addAppointment.user = this.user;
        if (this.user.email) {
          this.addAppointment.email = this.user.email;
        }
        if (this.user.phoneNumber) {
          this.addAppointment.phone = this.user.phoneNumber;
        }
      }
    });

    

    for (var member in Months) {
      if (parseInt(Months[member]) >= this.today.getMonth() + 1) {
        this.months.push(member);
      }
    }


    this.SelectMonth(Months[this.today.getMonth() + 1]);

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

    this.selectedOpType = this.data.opTypes[0];
    this.shownOp = this.data.op.filter(e => e.description.serviceOperationType.serviceOperationTypeId == this.selectedOpType.serviceOperationTypeId);
  }

  PopulateHours(day: number) {
    this.hours = [];
    var dayOfWeek = new Date(this.today.getFullYear(), Months[this.selectedMonth]-1, day).getDay();
    var program = this.data.details.serviceProgram.filter(e => e.weekDay == dayOfWeek)[0];

    var startHour;
    var startMinute;
    if (this.today.getDate() == day) {
      startHour = this.today.getHours() + 1;
      startMinute = 0;
    } else {
      startHour = program.openHour;
      startMinute = program.openMinute;
    }

    for (let i = startHour; i < program.closeHour; i++) {
      for (let j = startMinute; j < 60; j = j + 30) {
        this.hours.push(i + ":" + j.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }));
      }
      startMinute = 0;
    }

    this.selectedHour = this.hours[0];
  }

  ngOnInit() {
    this.filteredYears = this.yearFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterYear(value))
      );

    this.filteredBrands = this.brandCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterBrand(name) : this.data.brands.slice())
      );
  }

  AddAppointment() {
    if (!this.addAppointment.carYear) {
      this.iziToast.warning({
        message: "Selecteaza anul de productie al masinii!",
        position: "bottomCenter"
      });
      return;
    }

    if (!this.addAppointment.carManufacturer) {
      this.iziToast.warning({
        message: "Selecteaza brand-ul masinii!",
        position: "bottomCenter"
      });
      return;
    }

    if (!this.addAppointment.carModel) {
      this.iziToast.warning({
        message: "Selecteaza modelul masinii!",
        position: "bottomCenter"
      });
      return;
    }

    if (!this.selectedMonth || !this.selectedDay || !this.selectedHour) {
      this.iziToast.warning({
        message: "Selecteaza timpul pentru programare!",
        position: "bottomCenter"
      });
    }

    if (!this.addAppointment.serviceLocationOperation) {
      this.iziToast.warning({
        message: "Selecteaza un serviciu!",
        position: "bottomCenter"
      });
      return;
    }

    if (!this.addAppointment.email) {
      this.iziToast.warning({
        message: "Completeaza email-ul!",
        position: "bottomCenter"
      });
      return;
    }


    if (!this.addAppointment.phone) {
      this.iziToast.warning({
        message: "Completeaza numarul de telefon!",
        position: "bottomCenter"
      });
      return;
    }

    this.addAppointment.appointmentTime = new Date(this.today.getFullYear(),
      Months[this.selectedMonth] - 1,
      this.selectedDay,
      parseInt(this.selectedHour.split(":")[0]) + 3,
      parseInt(this.selectedHour.split(":")[1]));

    this.loaderService.show();
    this.service.AddAppointment(this.addAppointment).subscribe((e: boolean) => {
      this.loaderService.hide();
      if (e == true) {
        this.iziToast.success({
          message: "Programarea a fost realizata cu succes, vei fi contactat in cel mai scurt timp de un reprezentat al service-ului!",
          position: "bottomCenter"
        });
        this.dialogRef.close("success");
      } else {
        this.iziToast.error({
          message: "A aparut o eroare la adaugarea programarii, incercati din nou!",
          position: "bottomCenter"
        });
      }
    });

  }

  BrandSelected(item: CarManufacturer) {
    this.addAppointment.carManufacturer = item;
  }

  GetLogoSrc() {
    return `https://eservice.blob.core.windows.net/serviceslogo/${this.data.details.serviceInfo.serviceInfoId}/${this.data.details.serviceInfo.logo}`;
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

  OnTypeSelected(event) {

    this.shownOp = this.data.op.filter(e => e.description.serviceOperationType.serviceOperationTypeId == event.serviceOperationTypeId);
  
    this.opControl.setValue("");
    this.selectedOp = null;
  }

  displayFnType(item) {
    if(item)
    return item.name;
  }

  displayFn(item) {
    if(item)
    return item.description.name;
  }

  SelectMonth(value) {
    if (value == Months[this.today.getMonth() + 1]) {
      this.selectedDay = this.today.getDate();
      this.days = _.range(this.selectedDay, this.LastDayOfMonth(this.today.getMonth()));
    } else {
      this.selectedDay = 1;
      this.days = _.range(this.selectedDay, this.LastDayOfMonth(parseInt(Months[value]) - 1));
    }
    this.PopulateHours(this.selectedDay);
  }

  SelectDay(value) {
    this.PopulateHours(value);
  }

  private _filterYear(value: number): number[] {
    const filterValue = value.toString().toLowerCase();

    return this.years.filter(option => option.toString().toLowerCase().includes(filterValue));
  }

  private _filterBrand(value: string): CarManufacturer[] {
    const filterValue = value.toLowerCase();

    return this.data.brands.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();

    return this.data.opTypes.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOp(name: string) {
    const filterValue = name.toLowerCase();

    return this.shownOp.filter(option => option.description.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private LastDayOfMonth(month: number): number {
    return new Date(this.today.getFullYear(), month+ 1, 0).getDate() + 1;
  }

  OnOperationSelected(value: ShownOperation) {
    this.addAppointment.serviceLocationOperation = value.values;
  }

}
