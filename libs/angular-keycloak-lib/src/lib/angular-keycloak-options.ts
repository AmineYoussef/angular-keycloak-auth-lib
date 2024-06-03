export interface AngularKeycloakOptions {
    production: boolean;
    keycloak: KeycloakOptions;
    idleConfig: IdleConfigOptions;
}

export interface KeycloakOptions {
    authority: string;
    redirectUri: string;
    postLogoutRedirectUri: string;
    realm: string;
    clientId: string;
}

export interface IdleConfigOptions {
    idle: number;
    timeout: number;
    ping: number;
}
