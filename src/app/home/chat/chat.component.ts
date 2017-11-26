import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { Socket } from 'ng-socket-io';
import {ActivatedRoute} from "@angular/router";
import {ImessageInterface} from "../../model_interfaces/imessage.interface";
import axios from 'axios';
import {SYS_ORIGIN} from "../../constants/constants";
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
    this.socket.on("newMsg", function(data){
      console.log(data);
      if (data.chats_id===outerThis.dialogeId){
        console.log(typeof data.student_send);
        console.log(typeof +outerThis.myId);
        if (data.student_send===+outerThis.myId){
          const mess: ImessageInterface = {content: data.content, isMy: true };
          outerThis.messgs.push(mess);
        } else {
          const mess: ImessageInterface = {content: data.content, isMy: false };
          outerThis.messgs.push(mess);
        }

      }
    });
    axios.get(SYS_ORIGIN+'/api/auth/checksession').then(function(res){
      outerThis.myId=res.data.id;
    })
  }
  onclick(messageText: string) {
    var outerThis = this;
    console.log(this.messgs);
    this.socket.emit("msg", {chats_id: outerThis.dialogeId, content: messageText});
    this.messageText = '';
  }

}
