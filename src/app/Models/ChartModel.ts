import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";

export class ChartModelLine{
    public options?:ChartOptions = {
        responsive:true,
        maintainAspectRatio: false,
    };
    public label : string[] = [];
    public chartData : ChartConfiguration["data"] = {
        labels:[],
        datasets:[]
    };
    public legend?:boolean | undefined;
}

export class ChartModelPie{
    public pieChartOptions?: ChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          }
        }
      };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: [  ],
        datasets: [ {
          data: [ ],
        } ]
      };
    public pieChartLegend? : boolean | undefined = true;
}