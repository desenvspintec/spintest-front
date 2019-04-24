import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://54.202.0.205:8080/auth',
  realm: 'master',
  clientId: 'my-app'
};

export const environment = {
  production: true,
  assets: {
    dotaImages:
      'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
  },
  apis: { dota: 'http://54.202.0.205:8080/banco/rs/' },
  keycloak: keycloakConfig
};

