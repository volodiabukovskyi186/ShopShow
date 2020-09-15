import { Injectable } from '@angular/core';
// import { environment } from "src/environments/environment";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getPost(): Observable <any> {
    return this.http.get<any>(environment.blog) ;
  }
}
