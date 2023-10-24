import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact.service';
import { format, parse } from 'date-fns';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];
  selectedContact: any = null;

  constructor(private contactService: ContactService) {
    this.contactService.filtraContatti$.subscribe((filtraContatti: any[]) => {
      this.contacts = filtraContatti;
    });
  }

  lastMex(contact:any){
    // console.log('lastMessage contact',this.contactService.lastMessage(contact));
    return this.contactService.lastMessage(contact);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  setContact(index: number) {
    const currentContact = this.contacts[index];
    this.contactService.setCurrentContact(currentContact);
    this.selectedContact = currentContact;
    this.contactService.default = false;
  }

  formattaOraMex(contatto: string): string {
    return this.contactService.formattaOraMessaggio(contatto)
  }
}
