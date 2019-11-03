import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/service/jobs.service';

@Component({
  selector: 'app-viewpostedjobs',
  templateUrl: './viewpostedjobs.component.html',
  styleUrls: ['./viewpostedjobs.component.scss']
})
export class ViewpostedjobsComponent implements OnInit {


  jobList;
  applicantlist;
  recruiterId;
  constructor(private jobServices:JobsService) { }

  showApplicantList(id){
    this.jobServices.getApplicantList(id).subscribe(
      data=>{
        this.applicantlist=data;
      }
    );

  }
  ngOnInit() {
    this.recruiterId=sessionStorage.getItem('UserId')
    this.jobServices.getJobList(this.recruiterId).subscribe(
      data=>{
        this.jobList=data
    })
  }

}
