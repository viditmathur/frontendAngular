import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlljobsComponent } from './alljobs/alljobs.component';


const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'jobs',
        component:AlljobsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
