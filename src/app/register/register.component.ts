import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IStudent} from "../model_interfaces/istudent.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  newStudent: IStudent = {};
  constructor(private _fb: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private _auth: AuthService) {
    this.registerForm = this._fb.group({
        id: ['', Validators.required],
        email: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        password: ['', Validators.required],
        passwordMatch: ['', Validators.required]
      }
    );
  }

  ngOnInit() {

  }

  registerClick() {
    this.newStudent.firstname = this.registerForm.value.firstname;
    this.newStudent.lastname = this.registerForm.value.lastname;
    this.newStudent.email = this.registerForm.value.email;
    this.newStudent.id = this.registerForm.value.id;
    this._auth.doRegister(this.newStudent, this.registerForm.value.password, this.registerForm.value.passwordMatch );
  }

}
