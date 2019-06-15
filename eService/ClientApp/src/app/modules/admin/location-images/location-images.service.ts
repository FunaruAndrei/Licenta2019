import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceLocationPhoto } from 'src/app/core/models/service-location-photo';

@Injectable({
  providedIn: 'root'
})
export class LocationImagesService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationPhoto/";
  }

  GetPhotos(locationId: number): Observable<ServiceLocationPhoto[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceLocationPhoto[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SavePhoto(contact: ServiceLocationPhoto): Observable<number> {
    return this.http.post<number>(this.baseUrl, contact);
  }

  DeletePhoto(contactId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + contactId);
  }

  AddPhotos(formData: FormData, locationId: number): Observable<any> {
    const uploadReq = new HttpRequest('POST', this.baseUrl + locationId, formData, {
      reportProgress: true
    });

    return this.http.request(uploadReq);
  }
}
