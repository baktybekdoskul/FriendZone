import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onclick() {
    console.log('dastan chert');
  }

}
