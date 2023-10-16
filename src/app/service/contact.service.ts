import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentContact: any;

  getContacts() {
    return contacts;
  }

  setCurrentContact(contact: any) {
    this.currentContact = contact;
    console.log(this.currentContact);
  }

  getCurrentContact() {
    return this.currentContact;
  }
}
