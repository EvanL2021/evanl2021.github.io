import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, MatButtonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private httpClient = inject(HttpClient);

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body: new FormControl('', [Validators.required, Validators.minLength(25)]),
  });;

  sendMail() {
    const {name, email, body} = this.contactForm.value;
    
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    this.httpClient.post<any>("https://formspree.io/f/xjvnpnva", `name=${name}&email=${email}&message=${body}`, httpOptions).subscribe({
      next: data => {
        window.confirm('E-mail envoyé !')
      },
      error: error => {
          console.log('error!', error.message);
      }
    })
  }
}
