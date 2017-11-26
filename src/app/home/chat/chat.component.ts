import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { Socket } from 'ng-socket-io';
import {ActivatedRoute} from "@angular/router";
import {ImessageInterface} from "../../model_interfaces/imessage.interface";
import axios from 'axios';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  myId: number;
  dialogeId: number;
  messgs: ImessageInterface[] = [];
  messageText: string;
  constructor(private socket: Socket,
              private route: ActivatedRoute) { }

  ngOnInit() {
    var outerThis =this;
    this.dialogeId = +this.route.snapshot.paramMap.get('dialogid');
    this.socket.emit("join chat", outerThis.dialogeId);
    axios.get('/api/auth/checksession').then(function(res){
      outerThis.myId=res.data.id;
    });
    this.socket.on("msgs_history", function(data){
      outerThis.messgs = data;
    });
    this.socket.on("newMsg", function(data){
      console.log(data);
      if (data.chats_id===outerThis.dialogeId){
          const mess: ImessageInterface = {content: data.content, student_send: data.student_send};
          outerThis.messgs.push(mess);
          console.log(typeof data.student_send);
        console.log(typeof outerThis.myId);
      }
    });
  }
  onclick(messageText: string) {
    var outerThis = this;
    console.log(this.messgs);
    this.socket.emit("msg", {chats_id: outerThis.dialogeId, content: messageText});
  }
}
