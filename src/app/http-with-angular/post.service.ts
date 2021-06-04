import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {

  error = new Subject<string>();
  dbUrl = 'https://ng-sandbox-6eade-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    return this.http.post<{ name: string }>(this.dbUrl, postData,
      {
        observe: 'response'
      }
    );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post>(this.dbUrl,
      {
        headers: new HttpHeaders({'Custom-header': 'Set custom header req'}),
        params: new HttpParams().append('print', 'pretty').append('custom', 'key'),
        responseType: 'json'
      })
      .pipe(map(res => {
          const postArray: Post[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              postArray.push({...res[key], id: key});
            }
          }
          return postArray;
        }, catchError(err => {
          return throwError(err);
        })
      ));
  }

  deletePosts() {
    return this.http.delete<{ name: string }>(this.dbUrl,
      {
        observe: 'events'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
