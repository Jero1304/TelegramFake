import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentContact: any = [0];

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  value$ = this.valueSubject.asObservable();

  getValue(): string {
    return this.valueSubject.getValue();
  }

  setValue(nuovoValore: string) {
    // console.log('Impostazione del valore a:', nuovoValore);
    this.valueSubject.next(nuovoValore);
    this.filtraContatti(nuovoValore);
  }



  getContacts() {
    console.log(contacts);
    return contacts;
  }

  setCurrentContact(contact: any) {
    this.currentContact = contact;
  }

  getCurrentContact() {
    return this.currentContact;
  }

  private filtraContatti(testoFiltro: string) {
    const contactsFilter = this.getContacts();
    contactsFilter.filter((contatto) => contatto.name.toLowerCase().includes(testoFiltro.toLowerCase()));
    console.log(
      'contactsFilter',
      contactsFilter.filter((contatto) =>
        contatto.name.toLowerCase().includes(testoFiltro.toLowerCase())
      )
    );
    return contactsFilter;
  }
}
