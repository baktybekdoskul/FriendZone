import { Component, OnInit } from '@angular/core';
import {CommentService} from "../services/comment.service";
import {ActivatedRoute} from "@angular/router";
import {IcommentInterface} from "../../model_interfaces/icomment.interface";
import {SessionService} from "../../services/session.service";
import {PostService} from "../services/post.service";
import {IpostInterface} from "../../model_interfaces/ipost.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  postComments: IcommentInterface[];
  comment: IcommentInterface = {};
  post: IpostInterface = {};
  postId: string;
  constructor(private commentService: CommentService,
              private route: ActivatedRoute,
              private postService: PostService,
              private sessionService: SessionService) { }

  ngOnInit() {
     this.postId = this.route.snapshot.paramMap.get('id');
     this.postService.getPostInfoById(this.postId).subscribe((res) => this.post = res);
    this.commentService.getPostCommentsById(this.postId).subscribe((res: IcommentInterface[]) => {
      this.postComments = res;
    }
    );
  }
  addComment(content: string) {
    this.commentService.addComment(content, this.postId).subscribe(
      res => null,
      err => null,
      () => {this.commentService.getPostCommentsById(this.postId).subscribe((res: IcommentInterface[]) => {
          this.postComments = res;
        }
      );}
      );

    this.comment.content = '';
  }
}
