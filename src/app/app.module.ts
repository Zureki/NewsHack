import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeuilleHomeComponent } from './feuille-home/feuille-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeuilleHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
