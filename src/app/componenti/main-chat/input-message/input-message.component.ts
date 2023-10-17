import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css'],
})
export class InputMessageComponent {
  constructor() {}
  onSubmit(message: NgForm) {
    console.log(message.value);
  }
}
