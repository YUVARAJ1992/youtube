import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [BarchartComponent, PiechartComponent, LineChartComponent, HighChartComponent, DashboardComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
