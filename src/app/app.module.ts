import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SettingsComponent } from './settings/settings.component';

import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    AuthenticationComponent,
    BoardviewComponent,
    UserprofileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:DashboardComponent},
      {path:'boardview',component:BoardviewComponent},
      {path:'userprofile',component:UserprofileComponent},
      {path:'settings',component:SettingsComponent},
      {path:'login',component:AuthenticationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
