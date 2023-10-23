import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { format } from 'date-fns';
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
    console.log('dataString',dataString);
    const messageDate = new Date(dataString);
    console.log('messageDate',messageDate);
    // console.log('format',format(messageDate, 'MM/dd/yyyy'));
    return format(messageDate, 'dd/MM/yyyy');
    // return format(messageDate, 'MM/dd/yyyy');
  }

  groupMessagesByDay(messages: any[]): GroupedMessages {
    const groupedMessages: GroupedMessages = {};
    for (const message of messages) {
      const messageDate = new Date(message.date);
  
      // Verifica se la data è valida prima di procedere
      if (!isNaN(messageDate.getTime())) {
        const dayKey = this.formattaOraMessaggio(message.date);
        // const dayKey = format(messageDate, 'MM/dd/yyyy');
  
        if (!groupedMessages[dayKey]) {
          groupedMessages[dayKey] = [];
        }
        groupedMessages[dayKey].push(message);
      }
    }
    return groupedMessages;
  }
  
}
