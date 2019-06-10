import { BadInputError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe( response => this.posts = response );
  }

  createPost( input: HTMLInputElement ) {
    let post: any = {
      userId: input.value,
      id: input.value,
      title: input.value
    };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
        post = newPost;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          // this.form.setErrrors(error.originalError);
        } else {
          throw error;
        }
      });
  }

  updatePost( post ) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost( post ) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post)
    .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('Der Beitrag wurde gelöscht oder existiert nicht | 投稿が削除されたか、存在しません');
        } else {
          throw error;
        }
      });
  }
}
