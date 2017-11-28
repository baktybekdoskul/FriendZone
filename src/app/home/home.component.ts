import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {IStudent} from "../model_interfaces/istudent.interface";
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOutAnimation', [
      state('small', style({
        left: '-250px',
      })),
      state('large', style({
      })),
      transition('small <=> large', animate('120ms ease-in')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  state = 'small';
  @ViewChild('content')
  private content: ElementRef;
  curUser: IStudent = {};
  constructor(private route: Router,
              private authService: AuthService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.curUser = this.sessionService.user;
  }

  menuClick() {
    this.state = (this.state === 'small' ? 'large' : 'small');
    if (this.state === 'small') {
      const contentElem = this.content.nativeElement;
      contentElem.style.marginLeft = '0px';
    }else {
      const contentElem = this.content.nativeElement;
      contentElem.style.marginLeft = '200px';
    }
  }

  // public get sessionIsActive() {
  //   return true; // we have to check whether the session is active or not
  // }

  doLogout() {
     this.authService.doLogout();
  }
}
