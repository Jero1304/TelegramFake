import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentContact: any = [];

  public default:boolean = true

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  value$ = this.valueSubject.asObservable();
  filtraContatti$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); // Modifica per definire filtraContatti$ come BehaviorSubject

  getValue(): string {
    return this.valueSubject.getValue();
  }

  setValue(nuovoValore: string) {
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

  public filtraContatti(testoFiltro: string) {
    const contactsFilter = this.getContacts();
    const filteredContacts = contactsFilter.filter((contatto) => 
      contatto.name.toLowerCase().includes(testoFiltro.toLowerCase())
    );
    
    console.log('contactsFilter', filteredContacts);
    this.filtraContatti$.next(filteredContacts); // Emetti i contatti filtrati tramite il BehaviorSubject
  }
}
