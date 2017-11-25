import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import {AutoCompleteModule, DataScrollerModule, DataTableModule, DragDropModule, TabViewModule} from "primeng/primeng";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CoursesService} from "./courses/courses.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HomeRoutingModule,
    TabViewModule,
    DataScrollerModule,
    DragDropModule,
    DataTableModule,
    AutoCompleteModule
  ],
  declarations: [MessagesComponent, FriendsComponent, CoursesComponent, RecentPostsComponent],
  providers: [CoursesService]
})
export class HomeModule { }
