import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactFAQPageRoutingModule } from './contact-faq-routing.module';

import { ContactFAQPage } from './contact-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactFAQPageRoutingModule
  ],
  declarations: [ContactFAQPage]
})
export class ContactFAQPageModule {}
