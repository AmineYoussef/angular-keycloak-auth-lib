import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes, routes } from '../../app.routes';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from '@angular-keycloak-auth-lib';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public appRoutes = [
    {
      name: "Main",
      path: AppRoutes.Main
    },
    {
      name: "Protected Route",
      path: AppRoutes.Protected
    },
    {
      name: "Unprotected Route",
      path: AppRoutes.Unprotected
    }
  ];

  get isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  get username(): string {
    return this.authenticationService.userName;
  }

  constructor(private readonly authenticationService: AuthenticationService) { }
  redirectToLoginPage(): void {
    this.authenticationService.redirectToLoginPage();
  }
  logout(): void {
    this.authenticationService.logout()
  }

}
