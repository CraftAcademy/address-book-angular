import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor() {
    this.contact = {
      name: 'Raoul Diffouo',
      email: 'diraulo@craftacademy.se',
      company: 'Craft Academy',
      role: 'Coach',
      twitter: 'diraulo',
      location: 'Pretoria',
      notes: 'Can be annoying sometimes? :thinking:',
      image: 'https://avatars2.githubusercontent.com/u/4028374?s=40&v=4'
    };
  }

  ngOnInit() {
  }

}
