import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import ItemForm from './components/ItemForm';

function App() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return <p>Carregando...</p>;

  if (!keycloak.authenticated) return <p>Não autenticado</p>;

  return (
    <div>
      <h1>Sistema CRUD com Keycloak</h1>
      <p>Usuário logado: {keycloak.tokenParsed?.preferred_username}</p>
      <ItemForm keycloak={keycloak} />
      <button onClick={() => keycloak.logout()}>Sair</button>
    </div>
  );
}

export default App;
