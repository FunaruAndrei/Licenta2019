import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceDetails } from 'src/app/core/models/service-details';
import { Appointment } from 'src/app/core/models/appointment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/ServicesClient/";
  }

  GetServices(id: number): Observable<ServiceDetails> {
    return this.http.get < ServiceDetails>(this.baseUrl + id);
  }

  AddAppointment(app: Appointment): Observable<boolean> {
    return this.http.post<boolean>("/api/Appointment", app);
  }
}
