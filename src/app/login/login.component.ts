import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  doLoginStatus;
  doSignupStatus;
  responseData
  
  constructor(private authService: AuthService,
    private elf: ElementRef) { }
  
  doLogin(){
    return this.doLoginStatus; 
  }
  
  doSignup(){
    return this.doSignupStatus; 
  }
  
  signup(){
    let userData={
      "id":this.elf.nativeElement.get("#id").value,
      "role":this.elf.nativeElement.get("#email").value,
      "password":this.elf.nativeElement.get("#password").value
    }
    this.authService.signup(userData).subscribe(data=>{
      this.responseData=data
    },
    (err:any)=>{
      if(err){
        console.log(err)}
      }    
    )
    if(this.responseData.status=="200"){
      sessionStorage.setItem("UserId",userData.id)
      sessionStorage.setItem("role",this.responseData.role)
    }
  }

  switchToLogin () {
    this.doLoginStatus=true
    this.doSignupStatus=false
  }
  
  switchToSignup () {
    this.doLoginStatus=false
    this.doSignupStatus=true
  }

  login(){
    let userData={
      "id":this.elf.nativeElement.get("#id").value,
      "password":this.elf.nativeElement.get("#password").value      
    }
    this.authService.login(userData).subscribe(data=>{
      this.responseData=data
    },
    (err:any)=>{
      if(err){
        console.log(err)}
      }    
    )
    if(this.responseData.status=="200"){
      sessionStorage.setItem("UserId",userData.id)
      sessionStorage.setItem("role",this.responseData.role)
    }
  }

  ngOnInit() {
    this.doLoginStatus=true
    this.doSignupStatus=false
  }

}
