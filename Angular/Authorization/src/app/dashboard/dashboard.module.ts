import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class DashboardModule { }
