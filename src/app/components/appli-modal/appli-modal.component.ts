import { Application } from './../../shared/class/application';
import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appli-modal',
  templateUrl: './appli-modal.component.html',
  styleUrls: ['./appli-modal.component.scss']
})
export class AppliModalComponent implements OnInit {

  constructor(private varGlo: VariablesGlobales) { }

  ngOnInit() {
  }

  public closeAppModal() {
    this.varGlo.toggleAppModalStatus();
  }

  public showedApp(): Application {
    return this.varGlo.createApp();
  }

}
