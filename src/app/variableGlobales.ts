import { Application } from './shared/class/application';
// variablesGlobales.ts
import { Injectable } from '@angular/core';
@Injectable()
export class VariablesGlobales {
  public sideStatus = false;

  private appName: string;
  private appImg: string;
  private appCodeLink: string;
  private appSiteLink: string;
  private appUsedTechnos: string[];
  private appRealisationTime: string;
  private appDateOfRealisation: number;

  public changeApp(name: string, image: string, codeLink: string, siteLink: string, usedTechno: string[],
                   realisationTime: string, dateOfRealisation: number) {
    this.appName = name;
    this.appImg = image;
    this.appCodeLink = codeLink;
    this.appSiteLink = siteLink;
    this.appUsedTechnos = usedTechno;
    this.appRealisationTime = realisationTime;
    this.appDateOfRealisation = dateOfRealisation;

    this.createApp();
  }

  public createApp(): Application {
    return {
      name: this.appName,
      img: this.appImg,
      codeLink: this.appCodeLink,
      siteLink: this.appSiteLink,
      usedTechnos: this.appUsedTechnos,
      realisationTime: this.appRealisationTime,
      dateOfRealisation: this.appDateOfRealisation,

    };
  }
}

/* needfix : Fonction sécurisé */
