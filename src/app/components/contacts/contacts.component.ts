import { Component, OnInit } from '@angular/core';
import { contacts, Contact } from '../../data/contacts/contacts';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: any;
  constructor() {
    this.contacts = contacts;
  }

  ngOnInit(): void {}
}
