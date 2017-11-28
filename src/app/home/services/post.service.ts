import { Injectable } from '@angular/core';
import {IpostInterface} from "../../model_interfaces/ipost.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {SYS_ORIGIN} from "../../constants/constants";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostService {
  private baseUsersUrl = SYS_ORIGIN + '/api/courses'
  private coursePostUrl = this.baseUsersUrl + '/getposts/';
  private newPostsUrl = SYS_ORIGIN + '/api/users' + '/newposts/';
  private addPostUrl = SYS_ORIGIN + '/api/users' + '/addpost';
  private postInfoByIdUrl = SYS_ORIGIN + '/api/posts/getinfo/'
  constructor(private http: Http,
              private httpClient: HttpClient) {}

  public getCoursePostsById(id: string): Observable< IpostInterface[] > {
    const url = this.coursePostUrl + id.toString();
    return this.httpClient.get<IpostInterface[]>(url);
  }

  public getRecentPosts(): Observable<IpostInterface[]> {
    return this.httpClient.get<IpostInterface[]>(this.newPostsUrl);
  }


  addPost(content: string, courses_id: string ): Observable<any> {
    const httpBody = {content: content, courses_id: courses_id};
    return this.httpClient.post(this.addPostUrl, httpBody).pipe();
  }

  getPostInfoById(posts_id: string): Observable<IpostInterface> {
    return this.httpClient.get<IpostInterface>(this.postInfoByIdUrl + posts_id);
  }
}
