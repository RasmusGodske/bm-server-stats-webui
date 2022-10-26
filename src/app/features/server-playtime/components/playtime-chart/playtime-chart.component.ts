import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-playtime-chart',
  templateUrl: './playtime-chart.component.html',
  styleUrls: ['./playtime-chart.component.scss']
})
export class PlaytimeChartComponent {
  public lineChartData : ChartConfiguration<'line'>['data']= {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        tension: 0.5,
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors= [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}
