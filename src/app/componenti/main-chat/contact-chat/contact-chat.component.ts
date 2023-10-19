import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css'],
})
export class ContactChatComponent implements AfterViewChecked {
  @ViewChild('messageContainer', { static: false }) messageContainer!:
    | ElementRef
    | undefined;
  @ViewChild('scrollTo', { static: false }) scrollTo!: ElementRef | undefined;

  private mutationObserver: MutationObserver | null = null;

  constructor(private contactService: ContactService) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messageContainer && this.messageContainer.nativeElement) {
      const container = this.messageContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }

  get currentChat() {
    return this.contactService.getCurrentContact();
  }
}
