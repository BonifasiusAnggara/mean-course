import { PostsService } from './../posts.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})

export class PostCreateComponent {

  constructor(private postsService: PostsService) { }

  onAddPost(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };

    this.postsService.addPost(post);
    form.resetForm();
  }
}
