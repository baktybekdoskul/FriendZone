import { Injectable } from '@angular/core';
import {IStudent} from "../../model_interfaces/istudent.interface";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class StudentService {
  allStudents: IStudent[] = [
    {
      id: 1,
      firstname: 'patrick',
      lastname: 'rivera',
      email: 'parriv@gmail.com'
    },
    {
      id: 2,
      firstname: 'almagul',
      lastname: 'torgayeva',
      email: 'almaSupergirl@gmail.com'
    },
    {
      id: 3,
      firstname: 'jassan',
      lastname: 'fizik',
      email: 'fizikBotan@gmail.com'
    },
    {
      id: 4,
      firstname: 'nils',
      lastname: 'tschampel',
      email: 'nilstschamp@gmail.com'
    },
    {
      id: 5,
      firstname: 'rafael',
      lastname: 'varane',
      email: 'varraf@gmail.com'
    },
    {
      id: 6,
      firstname: 'kylian',
      lastname: 'mbappe',
      email: 'mbappe1998@gmail.com'
    }
  ];
  myFriends: IStudent[] = [
    {
      id: 1,
      firstname: 'patrick',
      lastname: 'rivera',
      email: 'parriv@gmail.com'
    },
    {
      id: 3,
      firstname: 'jassan',
      lastname: 'fizik',
      email: 'fizikBotan@gmail.com'
    }
  ];
  constructor() { }
  public getAllStudents(): Observable<IStudent[]> {
    return of(this.allStudents);
  }

  public getMyFriends(): Observable<IStudent[]> {
    return of(this.myFriends);
  }
}
