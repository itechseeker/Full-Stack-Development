import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Define Post interface for each post
export interface Post{
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  post_list: Post[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data=> {
      // Get list of posts from Resolver
      this.post_list= data.posts
    }
  )
  }
}
