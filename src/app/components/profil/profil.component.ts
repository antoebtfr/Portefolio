import { languageArray } from './../../../assets/data/language';
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
  public languages: Language[] = languageArray;


  constructor() {}

  ngOnInit() {
    this.age = this.ageCalculator();
  }

  private ageCalculator = () => {
    // tslint:disable-next-line: max-line-length
    const birthday = new Date('August 12, 00 3:35:00 GMT'); // Bravo, tu as trouvé ma date d'anniversaire. Tu peux toujours me contacter pour me le souhaiter le jour venu :)
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
