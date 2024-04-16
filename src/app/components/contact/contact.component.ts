import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from 'services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body: new FormControl('', [Validators.required, Validators.minLength(25)]),
  });

  constructor(private contactService: ContactService) {};

  sendMail() {
    const {name, email, body} = this.contactForm.value;
    this.contactService.sendMail(name || "", email || "", body || "");
  }
}
