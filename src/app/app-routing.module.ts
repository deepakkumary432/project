import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyLeaveOnbehalfComponent } from './apply-leave-onbehalf/apply-leave-onbehalf.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'employee-dashboard', component:EmployeeDashboardComponent},
  {path: 'leave', component:LeaveComponent},
  {path:'apply-leave',component:ApplyLeaveComponent},
  {path:'apply-leave-onbehalf',component:ApplyLeaveOnbehalfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent]