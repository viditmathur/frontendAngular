import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ApplyComponent } from './apply/apply.component';
import { AlljobsComponent } from './alljobs/alljobs.component';



@NgModule({
  declarations: [DashboardComponent, ViewdetailsComponent, ApplyComponent, AlljobsComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
