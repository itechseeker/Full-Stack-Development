import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Define Post interface for each post
export interface StockInfo{
  name: string;
  roe: number;
  pb: number;
  company: string;
}


@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {
  stock_list: StockInfo[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<StockInfo[]>('http://127.0.0.1:8000/stockApp/getInfo/').subscribe(
      response =>{
        this.stock_list=response
      }
    )
  }

}
