import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchPageCounter } from 'src/app/core/models/search-page-counter';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/SearchPage/";
  }

  GetCountersStats(): Observable<SearchPageCounter[]> {
    return this.http.get<SearchPageCounter[]>(this.baseUrl + "GetSearchCounters");
  }
}
