import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(  private http: HttpClient) { }
  getSizeTable(id: number, manufacId: number): Observable <any> {
    return  this.http.get(`https://api.showu.com.ua/size_group/size_table/${id}?lang=ua&manufacturer=${manufacId}`);
  }
}
