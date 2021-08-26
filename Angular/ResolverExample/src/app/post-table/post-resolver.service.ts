import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any>{

  constructor(private data_service: DataService) { }

  // Implement resolve method of Resolve interface
  resolve() {
    return this.data_service.getPost();
  }  
}
