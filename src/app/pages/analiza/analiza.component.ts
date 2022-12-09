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
              data: [ 120, 150, 180, 250, 320, 420, 500, 520, 510, 510, 500, 520],
              label: 'Productie (tone)',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            }
          ],
          labels: [ 'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie' ]
        },
      },
    ],
  ]);
}
