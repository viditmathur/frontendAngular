import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl="https://recruitportal.herokuapp.com//api/user/";
  
  constructor(private http:HttpClient) { }

  login(data){
    const url= this.baseUrl+"login";
    return this.http.post(url,data);
  }

  signup(data){
    const url= this.baseUrl+"signup";
    return this.http.post(url,data);
  }
}
