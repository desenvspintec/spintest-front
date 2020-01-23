
import { KeycloakService } from 'keycloak-angular';
import { KeycloakConfig } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  let keycloakConfig: KeycloakConfig = {
    url: 'http://167.172.130.89:8000/auth',
    realm: 'master',
    clientId: 'my-app',

  };
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {

      try {
        await keycloak.init({
          config: keycloakConfig,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
            flow: 'implicit'
          },
          bearerExcludedUrls: [],

        });
        resolve();
      } catch (error) {
        reject(error);
      }


    });
  };
}
