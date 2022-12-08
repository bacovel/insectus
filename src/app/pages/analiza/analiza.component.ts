import { Component } from '@angular/core';
import { ChartModelLine } from 'src/app/Models/ChartModel';

@Component({
  selector: 'app-analiza',
  templateUrl: './analiza.component.html',
  styleUrls: ['./analiza.component.scss']
})
export class AnalizaComponent {
  charts: Map<string, ChartModelLine> = new Map<string, ChartModelLine>([
    [
      "Input1",
      {
        label: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
        chartData: {
          datasets: [
            {
              data: [ 65, 59, 80, 81, 56, 55, 40 ],
              label: 'Series A',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            },
            {
              data: [ 28, 48, 40, 19, 86, 27, 90 ],
              label: 'Series B',
              backgroundColor: 'rgba(77,83,96,0.2)',
              borderColor: 'rgba(77,83,96,1)',
              pointBackgroundColor: 'rgba(77,83,96,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(77,83,96,1)',
              fill: 'origin',
            },
            {
              data: [ 180, 480, 770, 90, 1000, 270, 400 ],
              label: 'Series C',
              yAxisID: 'y1',
              backgroundColor: 'rgba(255,0,0,0.3)',
              borderColor: 'red',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            }
          ],
          labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
        },
      },
    ],
  ]);
}
