import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  public baseUrl="http://localhost:8080/api/job/";
  
  constructor(private http:HttpClient) { }

  getApplicantList(id){
    const url=this.baseUrl+"applicantList/"+id;
    return this.http.get(url);
  }

  getJobList(recruiterId){
    const url=this.baseUrl+"jobList/"+recruiterId;
    return  this.http.get(url);
  }
 
  getAllAvailableJob(){
    const url=this.baseUrl;
    return  this.http.get(url); 
  }

  postJob(dataToSend){
    const url=this.baseUrl;
    return  this.http.post(url,dataToSend);
  }

  applyJob(jobId,userId){
    let dataToSend={
      "JobId":jobId,
      "SeekerId":userId
    }
    const url=this.baseUrl+"apply";
    return  this.http.post(url,dataToSend);
  }
}
