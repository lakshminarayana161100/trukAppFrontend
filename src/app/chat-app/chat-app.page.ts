import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.page.html',
  styleUrls: ['./chat-app.page.scss'],
})
export class ChatAppPage implements OnInit {
  newMsg: any;
  created!: number;
  date: any

  messages = [
    {
      user: 'Narayana',
      created: '15245621',
      msg: 'hey what is up mate?'
    },
    {
      user: 'Narayana',
      created: '1524562155',
      msg: 'Nothing much Mr.Lion?'
    },
    {
      user: 'Narayana',
      created: '1524562166',
      msg: 'okay... Lets go to bar'
    },

  ];


  messages1 = [
    {
      user: 'abc',
      created: '15245621',
      msg: 'hey what is up mate?'
    },
    {
      user: 'abc',
      created: '1524562155',
      msg: 'Nothing much Mr.Lion?'
    },
    {
      user: 'abc',
      created: '1524562166',
      msg: 'okay... Lets go to bar'
    },

  ];

  currentuser = 'Narayana';

  @ViewChild(IonContent)
  content!: IonContent;

  constructor() { }

  ngOnInit() {

    this.date = new Date().getTime()
  }
  //send mes
  sendMessage() {
    this.messages.push({
      user: 'narayana',
      created: this.date,
      msg: this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    })

  }
}
