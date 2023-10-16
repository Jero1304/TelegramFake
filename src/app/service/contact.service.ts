import { Injectable } from '@angular/core';
import {contacts} from '../data/contacts'
 
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // constructor(private ContactsList:Object){
  // }
  getContacts() {
    return contacts;
  }
}
