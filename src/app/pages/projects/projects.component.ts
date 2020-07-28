import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.spotTheMouse();
  }
  spotTheMouse() {
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      if (mouseX > 1000) {
        document.getElementById('right-e').style.opacity = '1';
      } else {
        document.getElementById('right-e').style.opacity = '0';
      }
    } );
  }

}
