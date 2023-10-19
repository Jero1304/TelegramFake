import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-side-bar-contacts',
  templateUrl: './side-bar-contacts.component.html',
  styleUrls: ['./side-bar-contacts.component.css']
})
export class SideBarContactsComponent {
  showFiller = false
  value=''

  constructor(private contactService: ContactService) {
    this.contactService.value$.subscribe(newValue => {
      this.value = newValue;
      console.log('Value changed to:', newValue);
    });
  }

  filtraContatti() {
    this.contactService.setValue(this.value);
  }
}
