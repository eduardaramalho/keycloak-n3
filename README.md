# 🔐 Sistema Fullstack com Autenticação e Autorização via Keycloak

Este projeto é uma aplicação fullstack com autenticação/autorização usando **Keycloak**, incluindo uma **API REST** protegida por roles e um **front-end** com permissões condicionais conforme as roles do usuário autenticado.

---

## ✅ Funcionalidades

### 🛠️ Back-end (Node.js + Express)
- API REST com:
  - `GET /items` – lista de itens
  - `POST /items` – adiciona um novo item
  - `PUT /items/:id` – edita um item existente
  - `DELETE /items/:id` – exclui um item
- Autenticação via Keycloak usando `keycloak-connect`
- Autorização por **roles**:
  - `role-get`, `role-post`, `role-put`, `role-delete`

### 🖥️ Front-end (React)
- Formulário que:
  - Exibe lista de itens (`role-get`)
  - Permite criar (`role-post`)
  - Permite deletar (`role-delete`)
  - Permite editar (`role-put`)
- Ações protegidas com token JWT
- Exibição condicional com base nas **roles do usuário logado**

---
### 📚 Tecnologias Utilizadas
- Back-end: Node.js
- Front-end: React
- Auth: Keycloak
---

## ▶️ Como Executar o Projeto

### ⚙️ Requisitos

- Node.js
- Keycloak rodando localmente
- npm
---

### 📁 Backend
```bash
cd keycloak-n3/backend
npm install
npm start
```
### 📁 Frontend
```bash
cd keycloak-n3/frontend/keycloak-crud
npm install
npm start
```
###  📁 Keycloak 

O keycloak deve estar configurado com:

- Realm para a aplicação 
- Clients configurados 
- Roles criadas para cada método da API REST
- Usuários com as roles criadas

