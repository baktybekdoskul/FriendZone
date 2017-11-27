import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {PasswordRestoreComponent} from "./password-restore/password-restore.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
   {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'password/restore', component: PasswordRestoreComponent},
  {path: 'register', component: RegisterComponent},
   {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
