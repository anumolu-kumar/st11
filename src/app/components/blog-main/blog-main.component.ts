import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {blogs} from './blog';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss']
})
export class BlogMainComponent implements OnInit {
 article: any;
 articles: any
  constructor(private router: Router) {
    this.articles = blogs
   }

  ngOnInit(): void {
  }

  handleBackHome(){
    this.router.navigate(['/', 'home']);
  }

}
