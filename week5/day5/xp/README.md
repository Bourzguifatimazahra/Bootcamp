# Express.js CRUD API Projects

Ce projet contient trois exercices pour pratiquer la création d'API RESTful avec Express.js. Chaque exercice illustre un cas d'usage différent autour des opérations CRUD (Create, Read, Update, Delete).

---

## 🧠 Résumé du cours : Express.js & APIs

**Express.js** est un framework minimaliste pour Node.js qui permet de créer facilement des serveurs web et des APIs RESTful.

### ✨ Concepts clés :
- **CRUD** : Create, Read, Update, Delete
- **Routes HTTP** :
  - `GET` – Lire des données
  - `POST` – Créer de nouvelles données
  - `PUT` – Mettre à jour des données
  - `DELETE` – Supprimer des données
- **Middleware** : Fonctions exécutées lors de la réception de requêtes (ex. : `express.json()` pour lire le body en JSON)
- **Paramètres de route** : `req.params`, `req.body`, `req.query`
- **Code d’état HTTP** : 200 (OK), 201 (Created), 404 (Not Found), 500 (Server Error)

---

## 📁 Projets inclus

### 1. blog-api
**Fichier principal** : `server.js`

Une API REST pour gérer des articles de blog avec :
- `GET /posts` : Lister tous les articles
- `GET /posts/:id` : Récupérer un article
- `POST /posts` : Ajouter un article
- `PUT /posts/:id` : Modifier un article
- `DELETE /posts/:id` : Supprimer un article

---

### 2. book-api
**Fichier principal** : `app.js`

Une API CRUD simple pour gérer une collection de livres :
- `GET /api/books`
- `GET /api/books/:bookId`
- `POST /api/books`

---

### 3. crud-api (avec Axios)
**Fichier principal** : `app.js`  
**Module externe** : `data/dataService.js`

API Express qui utilise **Axios** pour récupérer des données depuis une API externe (JSONPlaceholder).

- `GET /api/posts` : Récupère les données depuis `https://jsonplaceholder.typicode.com/posts`

---

## 🚀 Lancement des projets

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Lancer le serveur :
   ```bash
   node server.js    # ou app.js selon le projet
   ```

---

## 📚 Technologies utilisées
- Node.js
- Express.js
- Axios (exercice 3)
```