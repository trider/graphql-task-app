import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Tenant-Identifier': 'trust',
    User: 'operator',
    Authorization: localStorage.getItem('cbToken')
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient

  ) { }

  public getServiceData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }




}
