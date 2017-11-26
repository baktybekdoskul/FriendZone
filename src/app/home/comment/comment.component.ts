import { Component, OnInit } from '@angular/core';
import {CommentService} from "../services/comment.service";
import {ActivatedRoute} from "@angular/router";
import {IcommentInterface} from "../../model_interfaces/icomment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  postComments: IcommentInterface[];
  comment: IcommentInterface = {};
  postId: string;
  constructor(private commentService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.postId = this.route.snapshot.paramMap.get('id');
    this.commentService.getPostCommentsById(+this.postId).subscribe((res: IcommentInterface[]) => this.postComments = res);
  }
  addComment(content: string) {
    console.log(content + '  ' + this.postId);
    this.comment.content = '';
  }
}
