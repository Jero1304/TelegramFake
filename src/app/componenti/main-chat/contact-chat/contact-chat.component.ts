import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css']
})
export class ContactChatComponent {
  constructor(private contactService: ContactService) {}

  get currentChat() {
    console.log(this.contactService.getCurrentContact());
    return this.contactService.getCurrentContact();
  }
}
