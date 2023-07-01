import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']
})
export class TopThreeProductsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    title: {
      text: 'Top 3 Products',
      style: {
        color: 'black'
      }
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deoderant',

      ]
    },
    yAxis: {

    },

    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 395,
            color: '#044342',
          },

          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          
          {
            name: 'Axe Deoderant',
            y: 275,
            color: '#ed9e20',
          },

        ]
      }
    ],


    credits: {
      enabled: false
    }
  };
}
