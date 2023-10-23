import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css'],
})
export class InputMessageComponent {
  constructor(private contactService: ContactService) {}
  onSubmit(messageForm: NgForm) {
    const currentContact = this.contactService.getCurrentContact();

    if (currentContact) {
      const currentDate = this.currentDate();
      const newMessage = {
        date: currentDate,
        message: messageForm.value.message,
        status: 'sent',
      };

      console.log('message: messageForm.value.message', messageForm.value.message);

      if (!currentContact.messages) {
        currentContact.messages = [];
      }

      currentContact.messages.push(newMessage);
      console.log('messaggii array:',currentContact.messages);
      this.contactService.setCurrentContact(currentContact);
    }

    messageForm.reset();
  }

  currentDate() {
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
}
