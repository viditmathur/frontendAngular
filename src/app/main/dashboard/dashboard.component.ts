import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId
  UserData
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userId=sessionStorage.getItem("UserId").toString();
    this.userService.getUserDetails(this.userId).subscribe(
      data=>{
        this.UserData=data
      }
    )
  }

}
