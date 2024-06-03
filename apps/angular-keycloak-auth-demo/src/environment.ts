export const environment = {
    production: false,
    keycloak: {
        // authority: 'http://172.25.10.80:8088/auth',
        authority: 'http://localhost:8080',
        redirectUri: 'http://localhost:4200',
        postLogoutRedirectUri: 'http://localhost:4200/logout',
        realm: 'AuthDemo',
        // realm: 'mXBoxAuth',
        clientId: 'auth-client',
        // clientId: 'mXBoxClient',
    },
    idleConfig: { idle: 10, timeout: 60, ping: 10 },
};