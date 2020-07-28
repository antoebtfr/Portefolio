import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../class/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  static URL = '../../../assets/experiences.json';

  constructor(private http: HttpClient) { }

  public getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(ExperienceService.URL);
  }
}
