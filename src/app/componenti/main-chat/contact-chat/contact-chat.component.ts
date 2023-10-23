import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { format, parse } from 'date-fns';
import { FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

interface GroupedMessages {
  [date: string]: any[];
}

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

  formattaOraMessaggio(dataString: string): string {
    // Trasforma la stringa in una data
    const messageDate = new Date(dataString);
    // Formatta la data nel formato "dd/MM/yyyy"
    return format(messageDate, 'dd - MMM - yyyy');
  }

  groupMessagesByDay(messages: any[]): GroupedMessages {
    const groupedMessages: GroupedMessages = {};

    for (const message of messages) {
      // Formatta la data nel formato "dd/MM/yyyy"
      const messageDateFormat = this.formattaOraMessaggio(message.date);
      if (!groupedMessages[messageDateFormat]) {
        groupedMessages[messageDateFormat] = [];
      }
      groupedMessages[messageDateFormat].push(message);
    }

    return groupedMessages;
  }
}
