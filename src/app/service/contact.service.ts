import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { BehaviorSubject, last } from 'rxjs';
import { format, parse } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentContact: any = [];

  public default: boolean = true;

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  value$ = this.valueSubject.asObservable();
  filtraContatti$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getValue(): string {
    return this.valueSubject.getValue();
  }

  setValue(nuovoValore: string) {
    this.valueSubject.next(nuovoValore);
    this.filtraContatti(nuovoValore);
  }

  getContacts() {
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

    this.filtraContatti$.next(filteredContacts);
  }

  
  public lastMessage(contact: any): any {
    if (contact.messages && contact.messages.length > 0) {
      const latestMessage = contact.messages.reduce(
        (latest: any, current: any) => {
          const dateA = new Date(latest.date);
          const dateB = new Date(current.date);
          return dateA > dateB ? latest : current;
        },
        contact.messages[0]
      );

      return latestMessage;
    } else {
      return null;
    }
  }

  formattaOraMessaggio(contatto: string): string {
    const ultimoMessaggio = this.lastMessage(contatto).date;
    // console.log(this.lastMessage(contatto));
    const messageDate = parse(
      ultimoMessaggio,
      'dd/MM/yyyy HH:mm:ss',
      new Date()
    );
    // console.log(format(messageDate, 'HH:mm'));

    return format(messageDate, 'HH:mm');
  }
}
