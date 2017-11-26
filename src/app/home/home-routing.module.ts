import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {FriendsComponent} from "./friends/friends.component";
import {CoursesComponent} from "./courses/courses.component";
import {RecentPostsComponent} from "./recent-posts/recent-posts.component";
import {MessagesComponent} from "./messages/messages.component";
import {CoursePageComponent} from "./course-page/course-page.component";
import {ChatComponent} from "./chat/chat.component";
import {CommentComponent} from "./comment/comment.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: RecentPostsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'friends', component: FriendsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'comment/:id', component: CommentComponent},
      {path: 'chat/:dialogid', component: ChatComponent},
      {path: 'course-page/:id', component: CoursePageComponent},
      {path: '**', component: RecentPostsComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class HomeRoutingModule { }
