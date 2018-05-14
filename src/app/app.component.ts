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
    this.initListOfContacts();
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

  private initListOfContacts() {
    this.contacts = [
      {
        name: 'Raoul Diffouo',
        email: 'diraulo@craftacademy.se',
        company: 'Craft Academy',
        role: 'Coach',
        twitter: 'diraulo',
        location: 'Pretoria',
        notes: 'Can be annoying sometimes? :thinking:',
        image: 'https://avatars2.githubusercontent.com/u/4028374?s=40&v=4'
      },
      {
        name: 'Magnus',
        email: 'magnus@craftacademy.se',
        company: 'Craft Academy',
        role: 'Coach',
        twitter: 'magnus',
        location: 'Gothenburg',
        notes: 'Awesome Guy',
        image: ''
      },
      {
        name: 'Faraz',
        email: 'faraz@craftacademy.se',
        company: 'Craft Academy',
        role: 'Coach',
        twitter: 'faraz',
        location: 'Stockholm',
        notes: 'FooBar',
        image: ''
      }
    ];
  }
}
