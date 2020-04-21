import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { from } from 'rxjs';
import { ApplyLeaveOnbehalfComponent } from './apply-leave-onbehalf/apply-leave-onbehalf.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmployeeDashboardComponent,
    LeaveComponent,
    ApplyLeaveComponent,
    ApplyLeaveOnbehalfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
