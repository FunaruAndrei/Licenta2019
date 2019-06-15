import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ServiceLocationFacility } from 'src/app/core/models/service-location-facility';

@Injectable({
  providedIn: 'root'
})
export class LocationFacilitiesService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationFacility/";
  }

  GetFacilties(locationId: number): Observable<ServiceLocationFacility[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceLocationFacility[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SaveFacility(contact: ServiceLocationFacility): Observable<number> {
    return this.http.post<number>(this.baseUrl, contact);
  }

  DeleteFacility(contactId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + contactId);
  }
}
