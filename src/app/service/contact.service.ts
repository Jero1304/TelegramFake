import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { BehaviorSubject, last } from 'rxjs';

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
      // Ordina i messaggi per data in ordine decrescente
      const messaggiOrdinati = contact.messages
        .slice()
        .sort(
          (a: { date: string | number | Date }, b: { date: string | number | Date }) => {
            const dataMessaggioA = new Date(a.date);
            const dataMessaggioB = new Date(b.date);
            return dataMessaggioB.getTime() - dataMessaggioA.getTime();
          }
        );
        return messaggiOrdinati[0]; // Restituisce l'ultimo messaggio (il più recente)
    } else {
      return null; // Nessun messaggio disponibile
    }
  }


}
