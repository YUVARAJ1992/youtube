import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from 'src/app/core-services/guard.service';

const routes: Routes = [
  {path:'', component:DashboardComponent, canActivateChild: [GuardService] ,children:[
    {path:'bar', component:BarchartComponent},
    {path:'pie', component:PiechartComponent},
    {path:'line', component:LineChartComponent, canActivate: [GuardService]},
    {path:'high', component:HighChartComponent}  
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
