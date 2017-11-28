import {Component, OnChanges, OnInit} from '@angular/core';
import {TabViewModule, TabView, TabPanel, DataScroller, DragDropModule, DataTable, AutoCompleteModule, AutoComplete} from 'primeng/primeng';
import {IcourseInterface} from "../../model_interfaces/icourse.interface";
import { NgModel } from '@angular/forms';
import {Router, RouterModule} from "@angular/router";
import {CoursesService} from "../services/courses.service";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourses: IcourseInterface[] = [];
  draggedCourse: IcourseInterface;
  course: IcourseInterface = {};
  allCourses: IcourseInterface[];
  myCourses: IcourseInterface[];
  courseAbbr = '';
  courseTitle = '';
  filteredCourses: IcourseInterface[] ;
  constructor(private courseService: CoursesService,
              private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.courseService.getMyCourses().subscribe((data: IcourseInterface[]) => {
      this.myCourses = data},
      err => console.log('something is wrong on loading mycourses'),
      () => {
        this.courseService.getAllCourses().subscribe((courses: IcourseInterface[]) => { this.allCourses = courses ; this.filteredCourses = this.allCourses; });
      });

  }



  findIndex(Course: IcourseInterface) {
    let index = -1;
    for (let i = 0; i < this.allCourses.length; i++) {
      if (Course.id === this.allCourses[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getCourseByAbbr(event) {
    let query = event.query;
    this.filteredCourses = this.filterCourseAbbr(query, this.allCourses);
  }
  getCourseTitle(event) {
    let query = event.query;
    this.filteredCourses = this.filterCourseTitle(query, this.allCourses);
  }
  filterCourseAbbr(query, courses: IcourseInterface[]): IcourseInterface[] {
    let filtered: IcourseInterface[] = [];
    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];
      if (course.abbr.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(course);
      }
    }
    return filtered;
  }

  filterCourseTitle(query, courses: IcourseInterface[]): IcourseInterface[] {
    let filtered: IcourseInterface[] = [];
    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];
      if (course.course_title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(course);
      }
    }
    return filtered;
  }


  addCourse(course: IcourseInterface) {
    course.student_id = this.sessionService.user.id;
    this.myCourses.push(course);
    this.courseService.addCourse(course);
  }

  unSelectCourse(course: IcourseInterface) {
    for (let i=0; i < this.myCourses.length; i++) {
      if(this.myCourses[i].id === course.id) {
        console.log(i);
        this.myCourses.splice(i,1);
      }
    }
    this.courseService.deleteCourse(course.id);

  }

  goToCoursePage(courseId: number): void {
    this.router.navigate(['/home/course-page/' + courseId]);
  }

  getIsInMyCourses(course_id: number) {
    for ( let i=0; i < this.myCourses.length; i++) {
      if (this.myCourses[i].id === course_id) {
        return true;
      }
    }
    return false;
  }
  public handleLastDelAbbr(event: KeyboardEvent): void {
    if (event.keyCode === 8) {
      this.filteredCourses = this.filterCourseAbbr(this.courseAbbr, this.allCourses);
    }
  }
  public handleLastDelTitle(event: KeyboardEvent): void {
    if (event.keyCode === 8) {
      this.filteredCourses = this.filterCourseTitle(this.courseTitle, this.allCourses);
    }
  }

  public selectHandle() {
    this.filteredCourses = this.filterCourseAbbr(this.course.abbr, this.allCourses);
  }
}
