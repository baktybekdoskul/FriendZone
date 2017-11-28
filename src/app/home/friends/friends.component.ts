import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../model_interfaces/istudent.interface";
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  studenname: IStudent = {};
  student: IStudent;
  filteredStudents: IStudent[] ;
  allStudents: IStudent[];
  myFriends: IStudent[] = [];
  reqIn: IStudent[] = [];
  reqOut: IStudent[] = [];
  constructor(private studentService: StudentService,
              private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.student  = this.sessionService.user;
    this.updateAllStudents();
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
    console.log(dialogId);
    this.router.navigate(['/home/chat/' + dialogId]);
  }

  getIsInMyFirends(studentId: number) {
    for ( let i=0; i < this.myFriends.length; i++) {
      if (this.myFriends[i].id === studentId) {
        return true;
      }
    }
    return false;
  }

  addFriend(student: IStudent) {
    this.studentService.addFriend(student.id).subscribe((r) => null, err => null,
      () => this.updateAllStudents());
  }

  deleteFriend(student: IStudent) {
    this.studentService.deleteFriend(student.id).subscribe((r) => null, err => null,
      () => this.updateAllStudents());

  }
  getCurrStudentId(student: IStudent): number {
    return this.sessionService.user.id;
  }
  confirmStudent(student: IStudent) {
    this.studentService.confirmFriend(student.id).subscribe((r) => null, err => null,
      () => this.updateAllStudents());
  }

  updateAllStudents() {
    this.studentService.getAllStudents().subscribe(
      (data: IStudent[]) => {this.allStudents = data; this.filteredStudents = this.allStudents;},
      err=> null,
        () => this.studentService.getMyFriends().subscribe(
          (data: IStudent[]) => {this.myFriends = data;},
          err=> null,
          ()=> this.studentService.getRequestedInStudents().subscribe(
            (data: IStudent[]) => {this.reqIn = data},
            err =>null,
            () => this.studentService.getRequestedOutStudents().subscribe(
              (data: IStudent[]) => {this.reqOut = data},
              error2 => null,
              () => console.log('completed')))));
  }

  public handleEnter(event: KeyboardEvent): void {
    if (event.keyCode === 8) {
      this.filteredStudents = this.filterStudentName(this.studenname.firstname, this.allStudents);
    }
  }
  public selectHandle() {
    this.filteredStudents = this.filterStudentName(this.studenname.firstname, this.allStudents);
  }
}
