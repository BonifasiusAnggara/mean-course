import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private _posts = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{status: string, message: string, data: Array<Post>}>('http://localhost:3000/api/posts').subscribe(resp => {
    console.log(resp);
    if (resp.status === 'OK') {
      this.posts = resp.data;
      this._posts.next([...this.posts]);
    }
    });
  }

  getPostss() {
    return this._posts.asObservable();
  }

  addPost(post: Post) {
    this.http.post<{status: string, message: string, data: any}>('http://localhost:3000/api/posts', post).subscribe(resp => {
      if (resp.status === 'OK') {
        console.log(resp);
        this.posts.push(post);
        this._posts.next([...this.posts]);
      }
    });
  }
}
