import { Injectable } from '@angular/core';
import {IcommentInterface} from "../../model_interfaces/icomment.interface";

import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";
import {SYS_ORIGIN} from "../../constants/constants";
import {Http, Response} from "@angular/http";
import {CommentComponent} from "../comment/comment.component";
import {SessionService} from "../../services/session.service";

@Injectable()
export class CommentService {
  baseUrl = SYS_ORIGIN + '/api';
  postCommentsByUrl = this.baseUrl + '/posts/getcomments/';
  addCommentUrl = this.baseUrl + '/users/addcomment';
  constructor(private httpClient: HttpClient,
              private http: Http,
              private sessionService: SessionService) { }

  getPostCommentsById(post_id: string): Observable<IcommentInterface[]> {
    return this.httpClient.get<IcommentInterface[]>(this.postCommentsByUrl + post_id);
  }

  addComment(content: string, postsId: string) : Observable<IcommentInterface>{
    console.log(this.addCommentUrl);
    const httpBody = {content: content, posts_id: postsId};
    return this.httpClient.post(this.addCommentUrl, httpBody).pipe();
  }
}
