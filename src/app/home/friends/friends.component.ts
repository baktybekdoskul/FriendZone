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
  student: IStudent;
  filteredStudents: IStudent[] ;
  allStudents: IStudent[];
  myFriends: IStudent[] = [];
  constructor(private studentService: StudentService,
              private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.student  = this.sessionService.user;
    this.studentService.getAllStudents().subscribe((data: IStudent[]) => {this.allStudents= data; this.filteredStudents = this.allStudents;});
    this.studentService.getMyFriends().subscribe((data: IStudent[]) => {this.myFriends = data; console.log(this.myFriends[0].chats_id)});
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
    this.studentService.addFriend(student.id);
    student.active_stud_id = this.sessionService.user.id;
    student.status = 0;
  }

  deleteFriend(student: IStudent) {
    for (let i=0; i < this.myFriends.length; i++) {
      if(this.myFriends[i].id === student.id) {
        this.myFriends.splice(i,1);
      }
    }
    student.status = null;
    this.studentService.deleteFriend(student.id);

  }
  getCurrStudentId(student: IStudent): number {
    console.log(student);
    return this.sessionService.user.id;
  }
  confirmStudent(student: IStudent) {
    console.log(student);
    student.status = 1;
    this.studentService.confirmFriend(student.id);
  }

}
