import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = "https://picsum.photos/v2/list?page=2&limit=10"

  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get(this.url);
  }
}
