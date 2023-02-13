import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAppPageRoutingModule } from './chat-app-routing.module';

import { ChatAppPage } from './chat-app.page';
//import {AutosizeModule} from 'ngx-autosize';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAppPageRoutingModule,
    //AutosizeModule
  ],
  declarations: [ChatAppPage]
})
export class ChatAppPageModule {}
