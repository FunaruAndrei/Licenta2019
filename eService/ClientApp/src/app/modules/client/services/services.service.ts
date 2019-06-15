import { Injectable } from '@angular/core';
import { ServicesClientRequest } from 'src/app/core/models/services-client-request';
import { Observable } from 'rxjs';
import { ServiceClient } from 'src/app/core/models/services-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/ServicesClient";
  }

  GetServices(request: ServicesClientRequest): Observable<ServiceClient[]> {
    return this.http.post<ServiceClient[]>(this.baseUrl, request);
  }

}
