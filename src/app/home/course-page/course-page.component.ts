import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IpostInterface} from "../../model_interfaces/ipost.interface";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  id: string;
  coursePosts: IpostInterface [];
  constructor(private _route: ActivatedRoute,
              private _postService: PostService,
              private _router: Router) {
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._postService.getCoursePostsById(this.id).subscribe((res) => this.coursePosts = res);
  }

  goToPostCommentsPage(postId: number) {
    this._router.navigate(['/home/comment/' + postId]);
  }
}
