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

  formattaDataMessaggio(dataString: string): string {
    const messageDate = parse(dataString, 'dd/MM/yyyy HH:mm:ss', new Date());
    return format(messageDate, 'dd/MM/yyyy');
  }

  formattaOraMessaggio(dataString: string): string {
    const messageDate = parse(dataString, 'dd/MM/yyyy HH:mm:ss', new Date());
    return format(messageDate, 'HH:mm');
  }


  groupMessagesByDay(messages: any[]): GroupedMessages {
    const groupedMessages: GroupedMessages = {};
  
    for (const message of messages) {
      // Estrai la parte della data che include giorno, mese e anno
      const messageDateFormat = this.formattaDataMessaggio(message.date);
      if (!groupedMessages[messageDateFormat]) {
        groupedMessages[messageDateFormat] = [];
      }
  
      // Inverti l'ordine dei messaggi in ciascun gruppo
      groupedMessages[messageDateFormat].push(message); // Usiamo unshift invece di push
  
      // Questo metterà i nuovi messaggi in cima al gruppo
    }
  
    return groupedMessages;
  }
}
