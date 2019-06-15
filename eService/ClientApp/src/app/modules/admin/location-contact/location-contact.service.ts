import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ServiceLocationContact } from 'src/app/core/models/service-location-contact';

@Injectable({
  providedIn: 'root'
})
export class LocationContactService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationContact/";
  }

  GetContacts(locationId: number): Observable<ServiceLocationContact[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceLocationContact[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SaveContact(contact: ServiceLocationContact): Observable<number> {
    return this.http.post<number>(this.baseUrl, contact);
  }

  DeleteContact(contactId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + contactId);
  }

}
