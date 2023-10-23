import { Component } from '@angular/core';
import { ContactService } from './service/contact.service'; // Assicurati di utilizzare il percorso corretto

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public contactService: ContactService) {
    this.contactService = contactService;
  }

  title = 'TelegramFake';
}
