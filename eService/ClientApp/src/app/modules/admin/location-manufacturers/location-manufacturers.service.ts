import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient} from '@angular/common/http';
import { ServiceManufacturer } from 'src/app/core/models/service-manufacturer';

@Injectable({
  providedIn: 'root'
})
export class LocationManufacturersService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/ServiceManufacturer/";
  }

  GetManufacturers(locationId: number): Observable<ServiceManufacturer[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceManufacturer[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SaveManufacturer(contact: ServiceManufacturer): Observable<number> {
    return this.http.post<number>(this.baseUrl, contact);
  }

  DeleteManufacturer(contactId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + contactId);
  }
}
