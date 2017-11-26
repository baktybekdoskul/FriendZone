import { Injectable } from '@angular/core';
import {IpostInterface} from "../../model_interfaces/ipost.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class PostService {
  allPosts: IpostInterface[] = [
    {
    id: 122,
    content: 'When will be final exam',
    date: new Date(2017, 11, 26, 0, 12, 59),
    course_id: 121,
    student_id: 1
    },
    {
      id: 123,
      content: 'Teacher postes the midterm results',
      date: new Date(2017, 11, 26, 0, 27, 1),
      course_id: 121,
      student_id: 15
    },
    {
      id: 124,
      content: 'When will be final exam',
      date: new Date(2017, 11, 26, 1, 16, 31),
      course_id: 122,
      student_id: 1
    },
    {
      id: 121,
      content: 'What was our last homework',
      date: new Date(2017, 11, 26, 0, 9, 34),
      course_id: 121,
      student_id: 15
    }
  ] ;
  constructor() {}

  public getCoursePostsById(id: number): Observable< IpostInterface[] > {
    const resultPosts: IpostInterface[] = [];
    for (let i = 0; i < this.allPosts.length; i++) {
      if (this.allPosts[i].course_id === id) {
        resultPosts.push(this.allPosts[i]);
      }
    }
    return of(resultPosts);
  }

}
