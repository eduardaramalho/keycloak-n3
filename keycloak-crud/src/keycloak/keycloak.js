import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'realm-key',
  clientId: 'react-client',
});

export default keycloak;
