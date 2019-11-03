import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl="http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }

  getrecruiterdetails(id){
    const url= this.baseUrl+"recruiter/"+id;
    return this.http.get(url);
  }

  getUserDetails(id){
    const url= this.baseUrl+"seeker/"+id;
    return this.http.get(url);
  }
}
