import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient} from '@angular/common/http';
import { ServiceLocationOperation } from 'src/app/core/models/service-location-operation';

@Injectable({
  providedIn: 'root'
})
export class LocationOperationsService {

  baseUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationOperation/";
  }

  GetOperations(locationId: number): Observable<ServiceLocationOperation[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceLocationOperation[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SaveOperation(entity: ServiceLocationOperation): Observable<number> {
    return this.http.post<number>(this.baseUrl, entity);
  }

  DeleteOperation(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + id);
  }

  EditOperation(info: ServiceLocationOperation, id: number): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl + id, info);
  }
}
