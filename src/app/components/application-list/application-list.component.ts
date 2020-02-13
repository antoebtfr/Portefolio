import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/shared/class/application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  constructor() { }

  public arrayApplications: Application[] = [
    { name: 'HalloFighter', img: 'https://camo.githubusercontent.com/3387f76995ab5585cdd267729cc2be64235bfa1d/68747470733a2f2f33353361323363353030646465336232616435382d63343966653765373335356433383438343532373066346137613061376161312e73736c2e6366322e7261636b63646e2e636f6d2f3565343363643632343566623632303030383964353836632f73637265656e73686f742e706e67', link: 'https://cranky-shirley-edcd00.netlify.com/', usedTechnos: ['HTML', 'CSS', 'TypeScript'] },
    { name: 'Space', img: 'https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e45260c84ed9d0008ec0503/screenshot.png', link: 'https://festive-darwin-3e8cdb.netlify.com/', usedTechnos: ['HTML', 'CSS', 'TypeScript'] },
  ];


  ngOnInit() {
  }

}
