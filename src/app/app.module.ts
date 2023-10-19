import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarContactsComponent } from './componenti/side-bar-contacts/side-bar-contacts.component';
import { MainChatComponent } from './componenti/main-chat/main-chat.component';

import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SideNavOverComponent } from './componenti/side-bar-contacts/side-nav-over/side-nav-over.component';
import { ContactComponent } from './componenti/side-bar-contacts/contact/contact.component';
import { ContactInfoComponent } from './componenti/main-chat/contact-info/contact-info.component';
import { InputMessageComponent } from './componenti/main-chat/input-message/input-message.component';
import { ContactChatComponent } from './componenti/main-chat/contact-chat/contact-chat.component';
import { NavBarComponent } from './componenti/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    SideBarContactsComponent,
    MainChatComponent,
    SideNavOverComponent,
    ContactComponent,
    ContactInfoComponent,
    InputMessageComponent,
    ContactChatComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
