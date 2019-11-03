import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'recruiter',
    loadChildren:'./recruiter/recruiter.module#RecruiterModule'
  },
  {
    path:'user',
    loadChildren:'./main/main.module#MainModule'
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
