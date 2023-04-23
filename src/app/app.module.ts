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

const appRoutes: Routes = [
  { path: '', component: HomePortafolioComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePortafolioComponent,
    AboutMeComponent,
    ProjectsComponent,
    DescriptionComponent,
    NavbarComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
