import {
  Component,
  ElementRef,
  ViewChild, AfterViewChecked
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css'],
})
export class ContactChatComponent implements AfterViewChecked {
  @ViewChild('messageContainer', { static: false }) messageContainer!: ElementRef;
  @ViewChild('scrollTo', { static: false }) scrollTo!: ElementRef;

  private mutationObserver: MutationObserver | null = null;


  constructor(
    private contactService: ContactService,
  ) { }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const container = this.messageContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }


  get currentChat() {
    // console.log(this.contactService.getCurrentContact());
    return this.contactService.getCurrentContact();
  }
}
