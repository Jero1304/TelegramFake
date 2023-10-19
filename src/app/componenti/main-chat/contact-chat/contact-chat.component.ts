import {
  Component,
  ElementRef,
  ViewChild, AfterViewInit, OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css'],
})
export class ContactChatComponent implements AfterViewInit {
  @ViewChild('lastMessageContainer', { read: ElementRef })
  lastMessageContainer!: ElementRef;


  constructor(
    private contactService: ContactService,
  ) {}

  ngAfterViewInit(): void {
  }


  get currentChat() {
    // console.log(this.contactService.getCurrentContact());
    return this.contactService.getCurrentContact();
  }
}
