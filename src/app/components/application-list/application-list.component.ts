import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/shared/class/application';
import { projects } from '../../../assets/data/project';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  constructor() {}

  private arrayApplications: Application[];
  public showedArray: Application[];

  private search(): void {

    const filter = () => {
      if (techno === 'Toutes') {
        this.showedArray = this.arrayApplications.filter(x =>
          x.name.includes(name)
        );
      } else {
        this.showedArray = this.arrayApplications.filter(x =>
          x.usedTechnos.includes(techno)
        );
        this.showedArray = this.showedArray.filter(x => x.name.includes(name));
      }
    };

    const techSelect = document.getElementById('search-by-techno');
    const searchInput = document.getElementById('search-by-name');
    let techno: string;
    let name: string;

    techSelect.addEventListener('change', () => {
      techno = techSelect.value;
      name = searchInput.value;
      filter();
    });

    searchInput.oninput = () => {
      techno = techSelect.value;
      name = searchInput.value;
      filter();
    };
  }


  ngOnInit() {
    this.arrayApplications = projects;
    this.showedArray = this.arrayApplications.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.search();
  }
}
