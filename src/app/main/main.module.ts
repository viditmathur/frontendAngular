import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlljobsComponent } from './alljobs/alljobs.component';



@NgModule({
  declarations: [DashboardComponent, AlljobsComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
