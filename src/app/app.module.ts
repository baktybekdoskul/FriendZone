import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule, InputTextModule, ButtonModule, AutoCompleteModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordRestoreComponent } from './password-restore/password-restore.component';
import { RegisterComponent } from './register/register.component';
import {HttpModule} from '@angular/http';
import {AuthService} from "./services/auth.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HomeModule} from "./home/home.module";
import {RouterModule, Routes} from "@angular/router";

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import {AuthGuard} from "./guards/auth.guard";
import {SessionService} from "./services/session.service";

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      SocketIoModule.forRoot(config),
      RouterModule,
      HttpModule,
      FormsModule,
      PanelModule,
      HttpClientModule,
      HomeModule,
      InputTextModule,
      ButtonModule,
      ReactiveFormsModule,
      AutoCompleteModule,
      AppRoutingModule
    ],
    declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PasswordRestoreComponent,
    RegisterComponent
  ],
  providers: [AuthService, SessionService, AuthGuard, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
