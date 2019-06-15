import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { ServiceLocation } from 'src/app/core/models/service-location';

@Injectable({
  providedIn: 'root'
})
export class LocationInfoService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationInfo/";
  }

  GetLocationInfo(id: number): Observable<ServiceLocation> {
    // let params = new HttpParams().set("id", id.toString());
    return this.http.get<ServiceLocation>(this.baseUrl + id);
  }

  AddLocationInfo(info: ServiceLocation, serviceInfoId: number): Observable<number> {
    let params = new HttpParams().set("serviceInfoId", serviceInfoId.toString());
    return this.http.post<number>(this.baseUrl, info, { params: params });
  }

  EditLocationInfo(info: ServiceLocation, id: number): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl + id, info);
  }

}
