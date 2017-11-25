import { Injectable } from '@angular/core';
import {IcourseInterface} from "../../model_interfaces/icourse.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";


@Injectable()
export class CoursesService {
  allCourses: IcourseInterface[] = [
    {
      id: 115,
      abbr: 'math121',
      course_title: 'Linear Algebra with its apps'
    },
    {
      id: 117,
      abbr: 'phys121',
      course_title: 'Mechanics'
    },
    {
      id: 958,
      abbr: 'sshs789',
      course_title: 'Philosophy'
    },{
      id: 115,
      abbr: 'math121',
      course_title: 'Linear Algebra with its apps'
    },
    {
      id: 117,
      abbr: 'phys121',
      course_title: 'Mechanic'
    },
    {
      id: 958,
      abbr: 'sshs789',
      course_title: 'Philosophy'
    }
  ];
  myCourses: IcourseInterface[] = [
    {
      id: 115,
      abbr: 'math121',
      course_title: 'Linear Algebra with its apps'
    },
    {
      id: 117,
      abbr: 'phys121',
      course_title: 'Mechanics'
    },
    {
      id: 958,
      abbr: 'sshs789',
      course_title: 'Philosophy'
    }
  ];
  constructor() { }
  public getAllCourses(): Observable<IcourseInterface> {
    return of(this.allCourses);
  }

  public getMyCourses(): Observable<IcourseInterface> {
    return of(this.myCourses);
  }
}
