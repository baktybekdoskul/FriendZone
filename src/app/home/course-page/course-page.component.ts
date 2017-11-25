import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
              private _postService: PostService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._postService.getCoursePostsById(this.id).subscribe((res) => this.coursePosts = res);
  }
}
