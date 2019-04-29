    
import { KeycloakService } from 'keycloak-angular';
import { KeycloakConfig } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  let keycloakConfig: KeycloakConfig = {
    url: 'http://ec2-54-202-0-205.us-west-2.compute.amazonaws.com:8080/auth',
    realm: 'master',
    clientId: 'my-app',
    credentials: {secret : '510b5325-24e4-475c-924b-22d03f35bdc7'}
  };
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        if (environment.production){
            try {
                await keycloak.init({
                  config: keycloakConfig,
                  initOptions: {
                    onLoad: 'login-required',
                    checkLoginIframe: false
                  },
                  bearerExcludedUrls: []
                });
                resolve();
              } catch (error) {
                reject(error);
              }
        }else{
            resolve();
        }

    });
  };
}