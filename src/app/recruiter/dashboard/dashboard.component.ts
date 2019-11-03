import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  details;
  recruiterId;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.recruiterId=sessionStorage.getItem("UserId").toString();
    this.user.getrecruiterdetails(this.recruiterId).subscribe(
      data=>{
        this.details=data
    })
  }

}
