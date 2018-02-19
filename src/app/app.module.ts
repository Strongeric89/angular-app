import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
