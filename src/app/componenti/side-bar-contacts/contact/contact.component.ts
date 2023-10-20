import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContactService) {
    this.contactService.filtraContatti$.subscribe((filtraContatti: any[]) => {
      this.contacts = filtraContatti;
    });
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts(); // Inizialmente ottieni tutti i contatti
  }

  setContact(index: number) {
    const currentContact = this.contacts[index];
    this.contactService.setCurrentContact(currentContact);
  }
}
