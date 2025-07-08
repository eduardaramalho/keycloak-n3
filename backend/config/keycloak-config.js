import session from 'express-session';
import Keycloak from 'keycloak-connect';

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore });

const sessionMiddleware = session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
});

export { keycloak, sessionMiddleware };
