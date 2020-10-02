import { PostsService } from './../posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSub: Subscription;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService.getPostss().subscribe((post: Post[]) => {
      this.posts = post;
    });
  }

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }
  }
}
