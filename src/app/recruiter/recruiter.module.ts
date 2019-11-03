import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewpostedjobsComponent } from './viewpostedjobs/viewpostedjobs.component';



@NgModule({
  declarations: [RecruiterComponent, DashboardComponent, PostjobComponent, ViewpostedjobsComponent],
  imports: [
    CommonModule
  ]
})
export class RecruiterModule { }
