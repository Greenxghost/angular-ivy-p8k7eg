import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/response";

  constructor(private httpClient: HttpClient) { }

  /***
   * public function httpclient get
   */
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}