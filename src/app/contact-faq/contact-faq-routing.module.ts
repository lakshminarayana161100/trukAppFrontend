import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFAQPage } from './contact-faq.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFAQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFAQPageRoutingModule {}
