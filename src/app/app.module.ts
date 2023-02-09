import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PortfoliodataService } from './services/portfoliodata.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProfessionalInfoComponent } from './components/professional-info/professional-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { RedesComponent } from './components/redes/redes.component';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { BotonloginComponent } from './components/botonlogin/botonlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonbackComponent } from './components/buttonback/buttonback.component';
import { NavbarIngresoComponent } from './components/navbar-ingreso/navbar-ingreso.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    AboutmeComponent,
    EducacionComponent,
    ProfessionalInfoComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    RedesComponent,
    IndexComponent,
    Pagina404Component,
    BotonloginComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    LoginComponent,
    ButtonbackComponent,
    NavbarIngresoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfoliodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
