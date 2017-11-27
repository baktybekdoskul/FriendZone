import {Injectable, OnInit} from '@angular/core';
import {IcourseInterface} from "../../model_interfaces/icourse.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Http, Response} from "@angular/http";
import {SYS_ORIGIN} from "../../constants/constants";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class CoursesService implements OnInit{
  allCourses: IcourseInterface[] ;
  myCourses: IcourseInterface[] = [];
  private baseUsersUrl = SYS_ORIGIN + '/api/users'
  private allCoursesUrl = this.baseUsersUrl + '/getcourses';
  private myCoursesUrl = this.baseUsersUrl + '/mycourses';
  private addCourseUrl = this.baseUsersUrl + '/selectcourse';
  private deleteCourseUrl = this.baseUsersUrl + '/unselectcourse';
  private getCourseInfoByIdUrl = SYS_ORIGIN + '/api/courses/getInfo/';
  constructor(private http: Http,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.allCoursesUrl).subscribe((r: Response) => {
      this.allCourses = r.json();
      console.log(r.json());
    }) ;
  }

  public getAllCourses(): Observable<IcourseInterface[]> {
    // return of(this.allCourses);
    return this.httpClient.get<IcourseInterface[]>(this.allCoursesUrl);
  }

  public getMyCourses(): Observable<IcourseInterface[]> {
    return this.httpClient.get<IcourseInterface[]>(this.myCoursesUrl);
  }

  public addCourse(course: IcourseInterface) {
    const httpBody = { courses_id: course.id};
    this.http.post(this.addCourseUrl, httpBody).subscribe((r: Response) => null);
  }

  public deleteCourse(courseId: number) {
    const httpBody = { courses_id: courseId};
    this.http.post(this.deleteCourseUrl, httpBody).subscribe((r: Response) => null);
  }

  public getCourseNameByID(id: string): Observable<IcourseInterface> {
    return this.httpClient.get<IcourseInterface>(this.getCourseInfoByIdUrl + id);
  }
}
