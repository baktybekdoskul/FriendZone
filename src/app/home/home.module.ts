import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import {
  AutoCompleteModule, ButtonModule, DataScrollerModule, DataTableModule, DragDropModule,
  TabViewModule
} from "primeng/primeng";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CoursesService} from "./courses/courses.service";
import { CoursePageComponent } from './course-page/course-page.component';
import {PostService} from "./services/post.service";
import { ChatComponent } from './chat/chat.component';

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
    ButtonModule,
    AutoCompleteModule
  ],
  declarations: [MessagesComponent, FriendsComponent, CoursesComponent, RecentPostsComponent, CoursePageComponent, ChatComponent],
  providers: [CoursesService, PostService]
})
export class HomeModule { }
