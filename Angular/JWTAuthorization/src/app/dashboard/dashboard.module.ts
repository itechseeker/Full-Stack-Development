import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { StockInfoComponent } from './stock-info/stock-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    StockInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class DashboardModule { }
