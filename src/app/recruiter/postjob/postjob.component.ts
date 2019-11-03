import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/service/jobs.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {

  responseData
  jobData;
  recruiterId;
  constructor(private jobServices:JobsService) { }

  postJobDetails(){
    this.jobServices.postJob(this.jobData).subscribe(
      data=>{
        this.responseData=data;
      }
    );

  }
  ngOnInit() {
    
  }

}
