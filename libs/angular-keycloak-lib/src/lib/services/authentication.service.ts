import { Inject, Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AngularKeycloakOptions } from '../angular-keycloak-options';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly keycloakService: KeycloakService,
    @Inject('AngularKeycloakOptions') private readonly options: AngularKeycloakOptions
  ) { }

  redirectToLoginPage(): Promise<void> {
    return this.keycloakService.login();
  }

  get userName(): string {
    return this.keycloakService.getUsername();
  }
  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  logout(): void {
    this.keycloakService.logout(this.options.keycloak.postLogoutRedirectUri);
  }
}
