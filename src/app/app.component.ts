import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: any;
  contacts: any[] = [];

  constructor() {
    this.initContact();
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
