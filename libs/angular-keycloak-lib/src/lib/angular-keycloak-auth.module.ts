import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularKeycloakOptions } from './angular-keycloak-options';
import { provideUserIdleConfig } from 'angular-user-idle';
export async function initializeKeycloak(keycloak: KeycloakService, options: AngularKeycloakOptions) {
  return keycloak.init({
    config: {
      url: options.keycloak.authority,
      realm: options.keycloak.realm,
      clientId: options.keycloak.clientId,
    },
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      checkLoginIframe: false,
      redirectUri: options.keycloak.redirectUri
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: [],
    bearerPrefix:'Bearer '
  });
}


@NgModule({
  imports: [
    KeycloakAngularModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
  ]
})

export class AngularKeycloakAuthModule {
  static forRoot(options: AngularKeycloakOptions): ModuleWithProviders<any> {
    return ({
      ngModule: AngularKeycloakAuthModule,
      providers: [
        {
          provide: 'AngularKeycloakOptions',
          useValue: options
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (keycloak: KeycloakService) => async () => initializeKeycloak(keycloak, options),
          multi: true,
          deps: [KeycloakService],
        },
        KeycloakService,
        provideUserIdleConfig({
          idle: options.idleConfig.idle,
          ping: options.idleConfig.ping,
          timeout: options.idleConfig.timeout,
        }),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: KeycloakBearerInterceptor,
          multi: true
        }
      ],
    });
  }
}
