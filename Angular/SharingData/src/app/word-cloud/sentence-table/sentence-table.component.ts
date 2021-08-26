import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sentence-table',
  templateUrl: './sentence-table.component.html',
  styleUrls: ['./sentence-table.component.css']
})
export class SentenceTableComponent implements OnInit {
  selected_word: any;
  sentence_list: any; 

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    // Get data emitted from DataService
    this.sentence_list=this.data_service.emit_data.subscribe( data=>{
      console.log(data)  
      this.selected_word=data['word']
      this.sentence_list=data['sentences']
    })
  }
}
