import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/service/mail.service';
import { Mail } from 'src/app/shared/class/mail';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private mailService: MailService) { }

  ngOnInit() {
  }


 public submitForm() {
  const mail: Mail = this.contactForm.value;

  this.mailService.sendMail(mail).subscribe();
  alert('Email sent');
 }
}
