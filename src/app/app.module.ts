import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePortafolioComponent } from './home-portafolio/home-portafolio.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { LinesStyleComponent } from './lines-style/lines-style.component';
import { HttpClientModule } from '@angular/common/http';
import { DataPortafolioService } from './data-portafolio.service';

const appRoutes: Routes = [
  { path: '', component: HomePortafolioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePortafolioComponent,
    AboutMeComponent,
    ProjectsComponent,
    DescriptionComponent,
    NavbarComponent,
    SplashScreenComponent,
    ContactMeComponent,
    ExpertiseComponent,
    LinesStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule

  ],
  providers: [DataPortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
