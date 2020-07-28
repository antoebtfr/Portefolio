import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from 'src/app/shared/class/experience';
import { ExperienceService } from 'src/app/shared/service/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  public arrayExperiences: Experience[] = [];

  constructor(private expService: ExperienceService) { }

  ngOnInit() {
    this.expService.getAllExperiences().subscribe(data => this.arrayExperiences = data);
  }

}


