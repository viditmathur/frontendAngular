import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/service/jobs.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.scss']
})
export class AlljobsComponent implements OnInit {

  jobList
  userId
  responseData
  
  constructor(private jobService: JobsService) { }
  apply(jobId){
    this.jobService.applyJob(jobId,this.userId).subscribe(
      data=>{
        this.responseData=data;
      }
    );

  }
  
  ngOnInit() {
    this.userId=sessionStorage.getItem("UserId").toString();
    this.jobService.getAllAvailableJob().subscribe(
      data=>{
        this.jobList=data
      }
    )
  }

}
