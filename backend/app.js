import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js';
import { keycloak, sessionMiddleware } from './config/keycloak-config.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(sessionMiddleware);
app.use(keycloak.middleware());

app.use('/items', itemRoutes);

app.listen(3001, () => console.log('Backend rodando na porta 3001'));
