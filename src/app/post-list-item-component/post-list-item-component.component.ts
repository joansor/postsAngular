import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string | undefined;
  @Input() postContent: string | undefined;
  @Input() loveIts: number | undefined;

 
  constructor() { }

  ngOnInit(): void {
  }
  likePost(){
    this.loveIts !== 1 ? this.loveIts = 1 : this.loveIts = 0;
    console.log(this.loveIts);
  }
  noLikePost(){
    this.loveIts !== -1 ? this.loveIts = -1 : this.loveIts = 0;
    console.log(this.loveIts); 
  }

}
