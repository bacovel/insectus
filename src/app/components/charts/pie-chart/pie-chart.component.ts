import { Component ,Input} from '@angular/core';
import {  ChartType, ChartOptions,ChartData,ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input() pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      }
    }
  };
  @Input() pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [  ],
    datasets: [ {
      data: [  ],
    } ]
  };
  @Input() pieChartLegend : boolean | undefined = true;

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ ];

  constructor() { }
}
