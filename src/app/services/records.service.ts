import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  singleRecord(id: number) {
    throw new Error('Method not implemented.');
  }

  private API_URL ='http://localhost:4000/api/v1/records'  ;
  

  constructor(private _http: HttpClient) { }

  getAllRecords():Observable<any> {
    return this._http.get<any>(this.API_URL)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
  createRecord(data:any):Observable<any> {
    return this._http.post<any>(this.API_URL, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
  updateRecord(id:number, data:any):Observable<any> {
    return this._http.patch<any>(this.API_URL + `/${id}`, data)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }

  deleteRecord(id:number):Observable<any> {
    return this._http.delete<any>(this.API_URL + `/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
  getRecordById(id:number):Observable<any> {
    return this._http.get<any>(this.API_URL + `/${id}`)
      .pipe(
        map((res)=>{
          return res;
        })
      );
  }
}
