import { Injectable } from '@angular/core';
import {IStudent} from "../../model_interfaces/istudent.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {SYS_ORIGIN} from "../../constants/constants";
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

@Injectable()
export class StudentService {
  baseUrl = SYS_ORIGIN + '/api';
  allStudentsByUrl = this.baseUrl + '/users/getstudents';
  myFriendByUrl = this.baseUrl + '/users/myfriends';
  addFriendByUrl = this.baseUrl + '/users/addfriend';
  deleteFriendByUrl = this.baseUrl + '/users/deletefriend';
  confirmFriendByUrl = this.baseUrl + '/users/confirmfriend';

  constructor (private httpClient: HttpClient,
               private http: Http){ }

  public getAllStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.allStudentsByUrl);
  }

  public getMyFriends(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.myFriendByUrl);
  }

  public addFriend(studentId: number) {
    console.log(this.addFriendByUrl);
    const httpBody = {friend_id: studentId};
    this.http.post(this.addFriendByUrl, httpBody).subscribe(res => console.log(res));
  }
  public deleteFriend(studentId: number) {
    const httpBody = {friend_id: studentId};
    this.http.post(this.deleteFriendByUrl, httpBody).subscribe(res => console.log(res));
  }

  public confirmFriend(studentId: number) {
    const httpBody = {friend_id: studentId};
    this.http.post(this.confirmFriendByUrl, httpBody).subscribe();
  }
}
