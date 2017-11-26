import {Component, OnChanges, OnInit} from '@angular/core';
import {TabViewModule, TabView, TabPanel, DataScroller, DragDropModule, DataTable, AutoCompleteModule, AutoComplete} from 'primeng/primeng';
import {IcourseInterface} from "../../model_interfaces/icourse.interface";
import { NgModel } from '@angular/forms';
import {Router, RouterModule} from "@angular/router";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourses: IcourseInterface[] = [];
  draggedCourse: IcourseInterface;
  course: IcourseInterface;
  allCourses: IcourseInterface[];
  myCourses: IcourseInterface[];
  filteredCourses: IcourseInterface[] ;
  constructor(private courseService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((courses: IcourseInterface[]) => { this.allCourses = courses ; this.filteredCourses = this.allCourses; });
    this.courseService.getMyCourses().subscribe((data: IcourseInterface[]) => this.myCourses = data);
  }

  dragStart(event, course: IcourseInterface) {
    this.draggedCourse = course;
  }
  drop(event) {
    if (this.draggedCourse) {
      const draggedCourseIndex = this.findIndex(this.draggedCourse);
      this.selectedCourses = [...this.selectedCourses, this.draggedCourse];
      this.allCourses = this.allCourses.filter((val, i) => i !== draggedCourseIndex);
      this.draggedCourse = null;
    }
  }
  dragEnd(event) {
    this.draggedCourse = null;
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


  addCourse(courseId: number) {
    console.log(courseId + '  yeasdf');
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
}
