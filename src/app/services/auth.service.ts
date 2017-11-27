import { Injectable } from '@angular/core';
import {SYS_ORIGIN} from '../constants/constants';
import {IStudent} from '../model_interfaces/istudent.interface';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import axios from "axios";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";
import {SessionService} from "./session.service";

@Injectable()
export class AuthService {
   private baseAuthUrl: string = SYS_ORIGIN + '/api/auth';
   private signInUrl: string = this.baseAuthUrl + '/login';
   private logoutUrl: string = this.baseAuthUrl + '/logout';
   private checkSessionUrl: string = this.baseAuthUrl + '/checksession';
   private registerUrl: string = this.baseAuthUrl + '/register';
  constructor(private http: Http,
              private router: Router,
              private httpService: HttpClient,
              private sessionService: SessionService) {
  }

  public authenticate(login: string, key: string) {
    const httpBody = {username: login, password: key};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({headers: headers});
    let student: IStudent;
    this.http.post(this.signInUrl, httpBody, options).subscribe((r: Response) =>
       student = r.json() || {}, err => console.log('something went wrong during the authorization'),
      () => {
        if (student.email !== '' && !isNullOrUndefined(student.email)) {
          this.sessionService.createSession(student);
          this.router.navigate(['/home']);
        }else {
          this.router.navigate(['/login']);
        }
      }
      );
  }

  public checkSessionThenAuthenticate(login: string, key: string) {
    this.http.get(this.checkSessionUrl).subscribe((r: Response) => {
      if ( r.json() === false) {
        this.authenticate(login, key);
      } else if (r.json().email === login) {
          this.router.navigate(['/home']);
      } else {
        console.log('something worng with login process');
      }
    },
      err => console.log('something went wrong checking the session'));
  }



  public doLogout() {
    this.http.get(this.logoutUrl).subscribe(
      (r) => null,
        err => console.log('something went wrong during the logout'),
      () => {
        this.sessionService.invalidate();
        this.router.navigate(['/login']);
      });
  }


  public doRegister(student: IStudent, password: string, passwordMatch: string) {
    const httpBody = {id: student.id, email: student.email, firstname: student.firstname, lastname: student.lastname, password: password, passwordMatch: passwordMatch};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({headers: headers});
    this.http.post(this.registerUrl, httpBody, options).subscribe((r: Response) => {
        student = r.json() || {}; console.log(r.json()); }, err => console.log('something went wrong during the registratio'),
      () => {
      console.log(student);
        if (student.email !== '' && student.email !=null) {
          this.sessionService.createSession(student);
          this.router.navigate(['/home']);
        }else {
          this.router.navigate(['/login']);
        }
      });
  }

}
