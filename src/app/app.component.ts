import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { IContact } from './contact/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: IContact;
  contacts: IContact[] = [];

  constructor(private http: Http) {
    this.initContact();

    // Get contacts from the API
    this.getContacts()
      .subscribe(({ data }) => {
        console.log(data);

        this.contacts = data.map(contact => {
          return contact.attributes;
        });
      });
  }

  getContacts() {
    const apiUrl = 'https://ca-address-book.herokuapp.com/api/contacts';
    return this.http.get(apiUrl)
      .map((response: Response) => response.json());
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
