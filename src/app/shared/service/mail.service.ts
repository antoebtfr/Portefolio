import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../class/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private URL = 'http://localhost:8080/email';

  constructor(private http: HttpClient) { }

  sendMail(data: Mail) {
    return this.http.post(this.URL, data);
  }
}
