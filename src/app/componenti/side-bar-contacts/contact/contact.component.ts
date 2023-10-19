import { Component } from '@angular/core';
import { ContactService } from '../../../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = this.contactService.getContacts();

  constructor(private contactService: ContactService) {}
  
  setContact(index: number) {
    const currentContact = this.contacts[index];
    this.contactService.setCurrentContact(currentContact);
  }

  
}
