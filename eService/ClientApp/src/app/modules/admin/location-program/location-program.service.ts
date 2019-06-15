import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient} from '@angular/common/http';
import { ServiceProgram } from 'src/app/core/models/service-program';

@Injectable({
  providedIn: 'root'
})
export class LocationProgramService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/LocationProgram/";
  }

  GetProgram(locationId: number): Observable<ServiceProgram[]> {
    let params = new HttpParams().set("locationId", locationId.toString());
    return this.http.get<ServiceProgram[]>(this.baseUrl + "GetByLocationId", { params: params });
  }

  SaveProgram(entity: ServiceProgram): Observable<number> {
    return this.http.post<number>(this.baseUrl, entity);
  }

  DeleteProgram(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + id);
  }

  EditProgram(info: ServiceProgram, id: number): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl + id, info);
  }
}
