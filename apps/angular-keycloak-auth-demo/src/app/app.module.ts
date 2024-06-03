import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule } from 'keycloak-angular';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    KeycloakAngularModule,
    BrowserModule,
    AppComponent,
    CommonModule,
    HttpClientModule
  ]
})
export class AppModule { }
