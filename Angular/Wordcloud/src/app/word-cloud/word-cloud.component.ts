import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/wordcloud';
import { DataService } from './data.service';
wordcloud(Highcharts);

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions={};
  selected_word: any;
  sentence_list: any;  

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
                this.selected_word=event.point.name
                this.sentence_list=this.data_service.getSentences(this.selected_word);
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
