import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IpostInterface} from "../../model_interfaces/ipost.interface";
import {PostService} from "../services/post.service";
import {CoursesService} from "../services/courses.service";
import {IcourseInterface} from "../../model_interfaces/icourse.interface";
import {IcommentInterface} from "../../model_interfaces/icomment.interface";
import {CommentService} from "../services/comment.service";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  id: string;
  coursePosts: IpostInterface [];
  course: IcourseInterface = {};
  post: IpostInterface = {};
  constructor(private _route: ActivatedRoute,
              private _postService: PostService,
              private _router: Router,
              private _courseService: CoursesService) {
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._courseService.getCourseNameByID(this.id).subscribe((res: IcourseInterface) => this.course = res);
    this._postService.getCoursePostsById(this.id).subscribe((res) => this.coursePosts = res);
  }

  goToPostCommentsPage(postId: number) {
    this._router.navigate(['/home/comment/' + postId]);
  }

  addPost(content: string) {
    this._postService.addPost(content, this.id).subscribe((r) => null, err => null,
      () => this._postService.getCoursePostsById(this.id).subscribe((res) => this.coursePosts = res));
    console.log(content);
    this.post.content = '';
  }
}
