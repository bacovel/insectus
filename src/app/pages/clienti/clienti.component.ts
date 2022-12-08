import { ChartModelPie } from './../../Models/ChartModel';
import { Component, OnInit } from "@angular/core";
import { ChartModelLine } from "src/app/Models/ChartModel";
import AOS from "aos";

@Component({
  selector: "app-clienti",
  templateUrl: "./clienti.component.html",
  styleUrls: ["./clienti.component.scss"],
})
export class ClientiComponent implements OnInit{

 
  charts: Map<string, ChartModelLine> = new Map<string, ChartModelLine>([
    [
      "Input1",
      {
        label: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
        chartData: {
          datasets: [
            
            {
              data: [1875200, 3784500, 11893300, 11893300],
              label: "Exemplare",
            },
            {
              data: [14.4, 480, 770, 90],
              label: "Densitate la 100ha",
            },
          ],
          labels: [
            "Bovine",
            "Porcine",
            "Ovine + Caprine",
            "Pasari"
          ],
        },
      },
    ],
  ]);

  public pieCharts : Map<string,ChartModelPie> = new Map<string,ChartModelPie>([
    [
      "Pie1",{
        pieChartData:{
          labels: ["Utilizare frecventa","Testare"],
          datasets: [ {
            data: [ 18, 7 ]
          } ]
        }
      }
    ],
    [
      "Pie2",{
        pieChartData:{
          labels: ["Costuri foarte mari","Costuri mari", "Avantajoase"],
          datasets: [ {
            data: [ 33, 14, 2 ]
          } ]
        }
      }
    ],
    [
      "Pie3",{
        pieChartData:{
          labels: ["Foarte des","Moderat", "Rar"],
          datasets: [ {
            data: [ 18, 6, 1 ]
          } ]
        }
      }
    ]
  ]);

  ngOnInit(): void {
    AOS.init();
  }
}
