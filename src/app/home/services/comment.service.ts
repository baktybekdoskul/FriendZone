import { Injectable } from '@angular/core';
import {IcommentInterface} from "../../model_interfaces/icomment.interface";

import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class CommentService {
  allComments: IcommentInterface[] = [{
    id: 1,
    date: new Date(2017, 11, 26, 17, 6, 21),
    content: "guy's what was our homework",
    studentId: 45,
    post_id: 122
  },
    {
      id: 2,
      date: new Date(2017, 11, 26, 17, 11, 11),
      content: "yes it was interesting",
      studentId: 2,
      post_id: 122
    },
    {
      id: 3,
      date: new Date(2017, 11, 27, 9, 31, 21),
      content: "they give us to make presentation",
      studentId: 15,
      post_id: 122
    },
    {
      id: 4,
      date: new Date(2017, 11, 26, 12, 11, 11),
      content: "is it final grades?",
      studentId: 5,
      post_id: 2
    }];
  constructor() { }

  getPostCommentsById(post_id: number): Observable<IcommentInterface[]> {
    const postComments: IcommentInterface[] = [];
    for (let i = 0; i < this.allComments.length; i++) {
      if (this.allComments[i].post_id === post_id) {
        postComments.push(this.allComments[i]);
      }
    }
    return of(postComments);
  }
}
