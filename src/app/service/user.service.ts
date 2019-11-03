import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl="http://localhost:8080/";
  
  constructor(private http:HttpClient) { }

  getrecruiterdetails(id){
    const url= this.baseUrl+"getRecruiter?recruiterId="+id;
    return this.http.get(url);
  }

  getUserDetails(id){
    const url= this.baseUrl+"getUser?UserId="+id;
    return this.http.get(url);
  }
}
