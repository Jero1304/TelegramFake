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
    // Non è necessario fare alcuna conversione, dato che le date sono già nel formato desiderato
    return dataString;
  }

  groupMessagesByDay(messages: any[]): GroupedMessages {
    const groupedMessages: GroupedMessages = {};

    for (const message of messages) {
      const messageDateFormat = message.date; // Utilizza direttamente la data dall'oggetto
      if (!groupedMessages[messageDateFormat]) {
        groupedMessages[messageDateFormat] = [];
      }
      groupedMessages[messageDateFormat].push(message);
    }

    return groupedMessages;
  }
}
