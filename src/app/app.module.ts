import { VariablesGlobales } from './variableGlobales';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SideComponent } from './components/side/side.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ProfilComponent,
    SideComponent,
    ProjectsComponent,
    ApplicationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
