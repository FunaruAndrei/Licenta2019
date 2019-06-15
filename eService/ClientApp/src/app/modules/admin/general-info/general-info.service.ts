import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceInfo } from 'src/app/core/models/service-info';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "/api/ServiceGeneralInfo";
  }

  AddServiceInfo(info: ServiceInfo): Observable<ServiceInfo> {
    return this.http.post<ServiceInfo>(this.baseUrl, info);
  }

  EditServiceInfo(info: ServiceInfo, id: number): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl + id, info);
  }

  GetServiceInfoByUserId(id: number): Observable<ServiceInfo> {
    let params = new HttpParams().set("id", id.toString());
    return this.http.get<ServiceInfo>(this.baseUrl + "/GetByUserId", { params: params });
  }

  UploadLogoImage(formData: FormData, serviceId: number): Observable<any> {
    let params = new HttpParams().set("serviceId", serviceId.toString());
    const uploadReq = new HttpRequest('POST', this.baseUrl + "/UploadLogoImage", formData, {
      reportProgress: true,
      params: params
    });

    return this.http.request(uploadReq);
  }

}
