import { VariablesGlobales } from './variableGlobales';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SideComponent } from './components/side/side.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ProfilComponent,
    SideComponent,
    ProjectsComponent,
    ApplicationListComponent,
    ContactFormComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
