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
  constructor(private commentService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log(postId);
    this.commentService.getPostCommentsById(+postId).subscribe((res: IcommentInterface[]) => this.postComments = res);
  }
  addComment() {
    console.log('added a comment')
  }
}
