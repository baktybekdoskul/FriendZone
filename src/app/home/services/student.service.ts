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
  studIdByUrl = this.baseUrl + '/users/getchatinfo/';
  requestedInStudentsUrl= this.baseUrl + '/users/requestsin';
  requestedOutStudentsUrl= this.baseUrl + '/users/requestsout';

  constructor (private httpClient: HttpClient,
               private http: Http){ }

  public getAllStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.allStudentsByUrl);
  }

  public getMyFriends(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.myFriendByUrl);
  }

  public addFriend(studentId: number): Observable<any> {
    const httpBody = {friend_id: studentId};
    return this.httpClient.post(this.addFriendByUrl, httpBody).pipe();
  }
  public deleteFriend(studentId: number): Observable<any> {
    const httpBody = {friend_id: studentId};
    return this.httpClient.post(this.deleteFriendByUrl, httpBody).pipe();
  }

  public confirmFriend(studentId: number): Observable<any> {
    const httpBody = {friend_id: studentId};
    return this.httpClient.post(this.confirmFriendByUrl, httpBody).pipe();
  }

  public getStudentByDialogId(chatId: string): Observable<IStudent> {
    return this.httpClient.get<IStudent>(this.studIdByUrl + chatId);
  }

  public getRequestedInStudents(): Observable<IStudent[]>{
    return this.httpClient.get<IStudent[]>(this.requestedInStudentsUrl);
  }

  public getRequestedOutStudents(): Observable<IStudent[]>{
    return this.httpClient.get<IStudent[]>(this.requestedOutStudentsUrl);
  }
}
