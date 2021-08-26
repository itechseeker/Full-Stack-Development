import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTableComponent } from './post-table.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PostTableComponent,    
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    PostTableComponent
  ]
})
export class PostTableModule { }
