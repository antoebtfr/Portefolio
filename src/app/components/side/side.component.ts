import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  constructor(public varGlo: VariablesGlobales) { }

  ngOnInit() {
  }

  closeSideBar() {
    this.varGlo.sideStatus = false;
  }

}
