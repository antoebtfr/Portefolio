import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm = this.fb.group({

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
