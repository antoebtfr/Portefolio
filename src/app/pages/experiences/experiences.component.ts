import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/shared/class/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  public arrayExperiences: Experience[] = [];

  constructor() { }

  ngOnInit() {
  }

}


