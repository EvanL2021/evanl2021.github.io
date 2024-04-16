import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  sendMail(name: string, email: string, body: string) {
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
