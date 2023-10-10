import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ReviewComponent } from './review/review.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  { path: '', component: HomePortafolioComponent },
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
    LinesStyleComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [DataPortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
