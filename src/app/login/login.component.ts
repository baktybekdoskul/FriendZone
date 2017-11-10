import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }
  public doLoginClick(): void {
    console.log('Salam');
  }

  public gotoRegister(): void {
    this._router.navigate(['/register']);
  }

  public handleEnter(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.doLoginClick();
    }
  }
}
