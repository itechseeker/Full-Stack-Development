import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/wordcloud';
import { DataService } from '../data.service';

wordcloud(Highcharts);

@Component({
  selector: 'app-word-cloud-chart',
  templateUrl: './word-cloud-chart.component.html',
  styleUrls: ['./word-cloud-chart.component.css']
})
export class WordCloudChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions={};

  constructor(private data_service:DataService) { }
 
  ngOnInit(): void {
    this.chartOptions={
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: { 
              click: event => {
                this.data_service.sendData(event.point.name);
              },
            }
          }
        }
      },
      accessibility: {
          screenReaderSection: {
              beforeChartFormat: '<h5>{chartTitle}</h5>' +
                  '<div>{chartSubtitle}</div>' +
                  '<div>{chartLongdesc}</div>' +
                  '<div>{viewTableButton}</div>'
          }
      },
      series: [{
          type: 'wordcloud',
          data: this.data_service.getData(),
          name: 'Occurrences'
      }],
      title: {
          text: ''
      }
  }    
  }
}
