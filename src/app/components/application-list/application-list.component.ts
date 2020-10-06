import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Application } from 'src/app/shared/class/application';
import { projects } from '../../../assets/data/project';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  constructor(private varGlo: VariablesGlobales) {}

  private arrayApplications: Application[]; // Array containing all applications
  public showedArray: Application[]; // Displayed array
  public technoArray: string[] = []; // Array containing all technos
  public dateArray: number[] = [];

  ngOnInit() {
    this.arrayApplications = projects;
    this.showedArray = this.arrayApplications.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    this.search();
    this.retrieveTechno();
  }

  private retrieveTechno() {
    // Retrieve all technos of all of the applications

    for (const item of this.arrayApplications) {
      for (const techno of item.usedTechnos) {
        if (this.technoArray.includes(techno) === false) {
          this.technoArray.push(techno);
        }

        if (this.dateArray.includes(item.dateOfRealisation) === false) {
          this.dateArray.push(item.dateOfRealisation);
        }
      }
    }

    this.dateArray.sort((a, b) => b - a);
    console.log(this.dateArray);
  }

  private search(): void {
    // Change applications displayed when select or input change

    const filter = () => {
      if (techno === 'All' && date === 'All') {
        this.showedArray = this.arrayApplications.filter(x =>
          x.name.includes(name)
        );
      } else if (techno === 'All' && date !== 'All') {
        this.showedArray = this.arrayApplications.filter(x =>
          x.name.includes(name)
        );
        this.showedArray = this.showedArray.filter(
          x => x.dateOfRealisation === Number(date)
        );
      } else if (techno !== 'All' && date === 'All') {
        this.showedArray = this.arrayApplications.filter(x =>
          x.usedTechnos.includes(techno)
        );
        this.showedArray = this.showedArray.filter(x => x.name.includes(name));
      } else {
        this.showedArray = this.arrayApplications.filter(x =>
          x.usedTechnos.includes(techno)
        );
        this.showedArray = this.showedArray.filter(x => x.name.includes(name));
        this.showedArray = this.showedArray.filter(
          x => x.dateOfRealisation === Number(date)
        );
      }
    };

    const techSelect =  document.getElementById('search-by-techno') as HTMLInputElement;
    const searchInput = document.getElementById('search-by-name') as HTMLInputElement;
    const dateSelect = document.getElementById('search-by-date') as HTMLInputElement;

    let techno: string;
    let name: string;
    let date: number | string;

    techSelect.addEventListener('change', () => {
      techno = techSelect.value;
      name = searchInput.value;
      date = dateSelect.value;
      filter();
    });

    searchInput.oninput = () => {
      techno = techSelect.value;
      name = searchInput.value;
      date = dateSelect.value;
      filter();
    };

    dateSelect.addEventListener('change', () => {
      techno = techSelect.value;
      name = searchInput.value;
      date = dateSelect.value;
      filter();
    });
  }

  public openAppModal(app: Application) {
    this.varGlo.toggleAppModalStatus();
    this.transferAppData(app);
    console.log(app);
  }

  private transferAppData(app: Application) {
    this.varGlo.changeApp(app);
  }
}
