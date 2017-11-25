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
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./home/home.module";
import {RouterModule, Routes} from "@angular/router";

@NgModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      RouterModule,
      HttpModule,
      FormsModule,
      PanelModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
