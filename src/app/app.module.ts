import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { ProfGoalsComponent } from './components/prof-goals/prof-goals.component';

const appRoutes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
   { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutMeComponent,
    CvComponent,
    ProfGoalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
