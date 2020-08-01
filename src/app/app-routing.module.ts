import { AppliModalComponent } from './components/appli-modal/appli-modal.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './pages/experiences/experiences.component';


const routes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '', component: HomepageComponent },
  { path: 'ip', component: AppliModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
