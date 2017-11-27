import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../model_interfaces/istudent.interface";
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  student: IStudent;
  filteredStudents: IStudent[] ;
  allStudents: IStudent[];
  myFriends: IStudent[];
  constructor(private studentService: StudentService,
              private route: Router) { }

  ngOnInit() {
    this.studentService.getMyFriends().subscribe((data: IStudent[]) => this.myFriends = data);
    this.studentService.getAllStudents().subscribe((data: IStudent[]) => this.allStudents= data);
    this.filteredStudents = this.allStudents;
  }
  getStudentByName(event) {
    let query = event.query;
    this.filteredStudents = this.filterStudentName(query, this.allStudents);
  }
  filterStudentName(query, students: IStudent[]): IStudent[] {
    let filtered: IStudent[] = [];
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.firstname.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(student);
      }
    }
    return filtered;
  }

  goToStudentProfile(dialogId: number) {
    this.route.navigate(['/home/chat/' + dialogId]);
  }
}
