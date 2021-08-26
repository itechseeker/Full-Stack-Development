import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Get data from server using HTTP GET
  getPost() : Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
