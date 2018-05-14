import { Component } from '@angular/core';
import { IContact } from './contact/contact.model';

import contacts from './contact/contacts-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: IContact;
  contacts: IContact[] = [];

  constructor() {
    this.initContact();
    this.contacts = contacts;
  }

  createContact() {
    console.log(`Create the following contact: ${JSON.stringify(this.contact)}`);
    this.contacts.push(this.contact);
    this.initContact();
  }

  private initContact() {
    this.contact = {
      name: '',
      email: '',
      company: '',
      role: '',
      twitter: '',
      location: '',
      notes: ''
    };
  }
}
