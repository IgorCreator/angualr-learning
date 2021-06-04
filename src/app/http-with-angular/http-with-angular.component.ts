import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostsService} from './post.service';
import {Post} from './post.model';

@Component({
  selector: 'app-http-with-angular',
  templateUrl: './http-with-angular.component.html',
  styleUrls: ['./http-with-angular.component.css']
})
export class HttpWithAngularComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  erroSubs: Subscription;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.fetchPosts();

    this.erroSubs = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.erroSubs.unsubscribe();
  }

  onCreatePost(postData: Post): void {
      this.postsService
        .createAndStorePost(postData.title, postData.content)
        .subscribe(() => {
          this.fetchPosts();
        }, error1 => {
          this.error = error1.message;
        });
  }

  onFetchPosts(): void {
    this.fetchPosts();
  }

  onClearPosts(): void {
      this.postsService.deletePosts().subscribe(() => {
        this.loadedPosts = [];
      });
  }

  onHandleError(): void {
    this.error = null;
  }

  private fetchPosts(): void {
      this.isFetching = true;
      this.postsService.fetchPosts().subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        error => {
          this.isFetching = false;
          this.error = error.message;
        }
      );
  }
}
