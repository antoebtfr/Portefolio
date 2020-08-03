import { Application } from './shared/class/application';
// variablesGlobales.ts
import { Injectable } from '@angular/core';
@Injectable()
export class VariablesGlobales {
  public sideStatus = false;
  private appModalStatus = false;

  private appName: string;
  private appImg: string;
  private appCodeLink: string;
  private appSiteLink: string;
  private appUsedTechnos: string[];
  private appRealisationTime: string;
  private appDateOfRealisation: number;

  public changeApp(app: Application) {
    this.appName = app.name;
    this.appImg = app.img;
    this.appCodeLink = app.codeLink;
    this.appSiteLink = app.siteLink;
    this.appUsedTechnos = app.usedTechnos;
    this.appRealisationTime = app.realisationTime;
    this.appDateOfRealisation = app.dateOfRealisation;

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
      dateOfRealisation: this.appDateOfRealisation
    };
  }

  public getAppModalStatus() {
    return this.appModalStatus;
  }

  public toggleAppModalStatus() {
    this.appModalStatus = !this.appModalStatus;
  }
}

/* needfix : Fonction sécurisé */
