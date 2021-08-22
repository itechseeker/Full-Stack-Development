import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCloudComponent } from './word-cloud.component';

import { HighchartsChartModule } from 'highcharts-angular';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    WordCloudComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule
  ],
  exports:[
    WordCloudComponent
  ],
})
export class WordCloudModule { }
