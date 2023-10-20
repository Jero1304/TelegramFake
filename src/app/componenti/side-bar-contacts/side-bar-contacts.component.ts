import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-side-bar-contacts',
  templateUrl: './side-bar-contacts.component.html',
  styleUrls: ['./side-bar-contacts.component.css'],
})
export class SideBarContactsComponent {
  showFiller = false;
  value = '';

  constructor(private contactService: ContactService) {
    
  }

  reset(){
    this.value = ''
    this.onSearchInputChange()
    this.filtraContatti()
  }

  onSearchInputChange() {
    // console.log('Input di ricerca modificato:', this.value);
    this.contactService.setValue(this.value);
    this.filtraContatti()
  }

  filtraContatti() {
    console.log('Filtraggio con valore:', this.value);
    this.contactService.setValue(this.value);
  }
}
