import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {


  posts = [
    {
      title: 'Mon premier post',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      loveIts: 1,
    
    },
    {
      title: 'Mon deuxième Post',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      loveIts: 0,
     
    },
    {
      title: 'Encore un post',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      loveIts: -1,
     
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
