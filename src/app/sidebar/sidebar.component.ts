import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  role
  children
  constructor() { }

  checkRole(){
    if(this.role){
      this.setMenu()
      return true
    }
    else{
      return false
    }
  }

  setMenu(){
    if(this.role=="Recruiter"){
      this.children=[
        {
          message:"Home",
          path:''
        },
        {
          message:"Post Job",
          path:'post'
        },
        {
          message:"View Posted Jobs",
          path:'jobs'
        }
      ]
    }
    else if(this.role=="User"){
      this.children=[
        {
          message:"Home",
          path:''
        },
        {
          message:"Apply",
          path:'jobs'
        },
        {
          message:"View Applied Jobs",
          path:''
        }
      ]
    }
  }

  ngOnInit() {
    this.role= sessionStorage.getItem('role')
  }

}
