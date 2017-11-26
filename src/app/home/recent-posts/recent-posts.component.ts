import { Component, OnInit } from '@angular/core';
import {IpostInterface} from "../../model_interfaces/ipost.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  id: string;
  recentPosts: IpostInterface [];
  constructor(private _postService: PostService,
              private _router: Router) {
  }

  ngOnInit() {
    this._postService.getRecentPosts().subscribe((res) => this.recentPosts = res);
  }
  goToPostCommentsPage(postId: number) {
    this._router.navigate(['/home/comment/' + postId]);
  }
}
