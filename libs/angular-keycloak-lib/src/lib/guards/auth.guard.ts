import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);
  if (authenticationService.isLoggedIn()) {
    return true;
  }
  authenticationService.redirectToLoginPage();
  return false;
};
