import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  // Variables

  public languages = ['HTML', 'CSS', 'JavaScript' , 'NodeJS', 'PHP', 'Python', 'C', 'Angular'];
  constructor() { }

  ngOnInit() {
  }

}
