import { AuthenticationService } from '@angular-keycloak-auth-lib';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NgIf],
  styleUrl: './main-page.component.css',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  get isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  constructor(private readonly authenticationService: AuthenticationService) { 
  }
  redirectToLoginPage(): void {
    this.authenticationService.redirectToLoginPage();
  }
}