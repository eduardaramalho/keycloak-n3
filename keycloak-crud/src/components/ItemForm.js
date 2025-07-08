import React, { useState, useEffect } from 'react';

export default function ItemForm({ keycloak }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + keycloak.token };

  const fetchItems = () => {
    fetch('http://localhost:3001/items', { headers })
      .then(res => res.json())
      .then(setItems);
  };

  useEffect(() => {
    if (keycloak.authenticated) fetchItems();
  }, [keycloak]);

  const createItem = () => {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers,
      body: JSON.stringify({ text })
    }).then(fetchItems);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'DELETE',
      headers
    }).then(fetchItems);
  };

  return (
    <div>
      <h2>Itens</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            {keycloak.hasRealmRole('role-delete') && (
              <button onClick={() => deleteItem(item.id)}>Excluir</button>
            )}
          </li>
        ))}
      </ul>
      {keycloak.hasRealmRole('role-post') && (
        <div>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={createItem}>Criar</button>
        </div>
      )}
    </div>
  );
}
