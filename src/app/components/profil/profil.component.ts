import { Language } from './../../shared/class/language';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  // Variables
  public left = false;
  public rigth = false;
  public age: number;
  public languages: Language[] = [
    { name: 'HTML', color: 'orange' },
    { name: 'CSS', color: 'blue' },
    { name: 'JavaScript', color: 'yellow' },
    { name: 'NodeJS', color: 'green' },
    { name: 'PHP', color: 'purple' },
    { name: 'Python', color: 'grey' },
    { name: 'C', color: 'grey' },
    { name: 'Angular', color: 'red' },
    { name: 'SQL', color: 'lightgreen' }
  ];


  constructor() {}

  ngOnInit() {
    this.age = this.ageCalculator();
  }

  toggleSideLeft() {
    this.left = !this.left;
  }

  toggleSideRight() {
    this.rigth = !this.rigth;
  }

  chanceColor(elementId: string, elementColor: string) {
    document.getElementById(elementId).style.backgroundColor = elementColor;
  }

  private ageCalculator = () => {
    const birthday = new Date('August 12, 00 3:35:00 GMT');
    const dateNow = new Date();
    let age: number;
    let year = birthday.getFullYear();

    for (let i = 0; birthday < dateNow; i++) {
      year++;
      birthday.setFullYear(year);
      age = i;
    }
    return age;
  }
}
