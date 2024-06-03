import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AngularKeycloakAuthModule, AngularKeycloakOptions } from '@angular-keycloak-auth-lib';
import { environment } from '../environment';

let authProviders: Provider[] = [];
const options: AngularKeycloakOptions = environment;
if (AngularKeycloakAuthModule.forRoot(environment).providers) {
  authProviders = AngularKeycloakAuthModule.forRoot(options).providers as Provider[];
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ...authProviders
  ],
}

