import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentenceTableComponent } from './sentence-table/sentence-table.component';
import { WordCloudChartComponent } from './word-cloud-chart/word-cloud-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    SentenceTableComponent,
    WordCloudChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule
  ],
  exports:[
    SentenceTableComponent,
    WordCloudChartComponent
  ]
})
export class WordCloudModule { }
