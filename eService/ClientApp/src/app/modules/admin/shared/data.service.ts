import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceLocation } from 'src/app/core/models/service-location';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetServiceIdByUserId(userId: number): Observable<number> {
    let params = new HttpParams().set("Id", userId.toString());
    return this.http.get<number>("/api/ServiceGeneralInfo/GetIdByUserId", {
      params: params
    });
  }

  GetLocationList(id: number): Observable<ServiceLocation[]> {
    let params = new HttpParams().set("id", id.toString());
    return this.http.get<ServiceLocation[]>("/api/LocationInfo/GetByInfoId", {
      params: params
    });
  }

}
