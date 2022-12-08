import { Component,Input } from '@angular/core';
import {  ChartType, ChartOptions,ChartConfiguration} from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  @Input() chartLabels : string[] = []
  public barChartType: ChartType = 'bar';
  @Input()  barChartLegend : boolean | undefined = true;
  public barChartPlugins = [];
  @Input() barChartData :ChartConfiguration['data'] = {
    datasets:[],
    labels:[]
  }
  constructor() {}
}
