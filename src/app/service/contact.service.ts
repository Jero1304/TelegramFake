import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //togli =[0] è inizializzata per rimuovere errori ma non funziona bene, sai quello che devi fare ;)!
  private currentContact: any=[0];

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  value$ = this.valueSubject.asObservable();

  getValue(): string {
    return this.valueSubject.getValue();
  }
  setValue(newValue: string) {
    this.valueSubject.next(newValue);
  }

  

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
