import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-faq',
  templateUrl: './contact-faq.page.html',
  styleUrls: ['./contact-faq.page.scss'],
})
export class ContactFAQPage implements OnInit {
  isModalOpen = false;
  constructor() { }

  ngOnInit() {
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
