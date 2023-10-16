import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  constructor(private contactService: ContactService) {}

  get currentChat() {
    return this.contactService.getCurrentContact();
  }
}
