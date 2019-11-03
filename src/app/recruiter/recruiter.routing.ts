import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewpostedjobsComponent } from './viewpostedjobs/viewpostedjobs.component';


const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'post',
        component:PostjobComponent
    },
    {
        path:'jobs',
        component:ViewpostedjobsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
