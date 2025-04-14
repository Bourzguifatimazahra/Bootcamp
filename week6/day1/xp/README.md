# 🚀 Exercices Express.js XP

Ce dépôt contient trois exercices simples pour apprendre à utiliser **Express.js** et `express.Router()` afin de créer des APIs RESTful.

---

## 🌟 Exercice 1 : Application Express.js simple avec des routes

### ✅ Objectif :
Créer une application Express.js de base avec deux routes :
- `/` — Page d’accueil
- `/about` — Page À propos

### 🛠️ Étapes :
1. `npm init -y`
2. `npm install express`
3. Créer les fichiers `app.js` et `routes/index.js`
4. Utiliser `express.Router()` pour définir les routes
5. Lancer le serveur avec : `node app.js`
6. Tester :
   - `http://localhost:3000/`
   - `http://localhost:3000/about`

---

## 🌟 Exercice 2 : API To-do list avec opérations CRUD

### ✅ Objectif :
Créer une API pour gérer une liste de tâches (Créer, Lire, Mettre à jour, Supprimer).

### 📌 Endpoints :
- `GET /todos` – Lister toutes les tâches
- `POST /todos` – Ajouter une nouvelle tâche
- `PUT /todos/:id` – Modifier une tâche par ID
- `DELETE /todos/:id` – Supprimer une tâche par ID

### 🛠️ Étapes :
1. `npm init -y`
2. `npm install express`
3. Créer les fichiers `app.js` et `routes/todos.js`
4. Utiliser `express.json()` pour lire le corps des requêtes
5. Utiliser un tableau en mémoire pour stocker les tâches

---

## 🌟 Exercice 3 : API de gestion de livres avec opérations CRUD

### ✅ Objectif :
Créer une API pour gérer une liste de livres (Créer, Lire, Mettre à jour, Supprimer).

### 📌 Endpoints :
- `GET /books` – Lister tous les livres
- `POST /books` – Ajouter un nouveau livre
- `PUT /books/:id` – Modifier un livre par ID
- `DELETE /books/:id` – Supprimer un livre par ID

### 🛠️ Étapes :
1. `npm init -y`
2. `npm install express`
3. Créer les fichiers `app.js` et `routes/books.js`
4. Utiliser `express.Router()` et un tableau en mémoire
5. Tester l’API avec Postman ou curl

---

## 🧪 Outils de test :
- [Postman](https://www.postman.com/)
- `curl` en ligne de commande
- Navigateur (pour les routes GET simples)

---

## 📂 Exemple d’arborescence :
```
project-root/
│
├── app.js
├── package.json
└── routes/
    ├── index.js
    ├── todos.js
    └── books.js
```