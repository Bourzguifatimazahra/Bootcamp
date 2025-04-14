 # 🎯 Trivia Quiz Game

Ce projet est un mini-jeu de quiz réalisé avec **Express.js**. Le joueur répond à une série de questions à choix libre et reçoit un score final à la fin du jeu.

---

## 🚀 Fonctionnalités

- Lancement du quiz via `/quiz`
- Questions et réponses codées en dur
- Suivi du score avec `express-session`
- Routes organisées avec `express.Router`
- Affichage de la note finale

---

## 🧠 Technologies Utilisées

- **Node.js**
- **Express.js**
- **express-session** pour stocker les données de session (score et progression)
- **HTML minimal** pour les formulaires de réponse

---

## 📘 Résumé du cours

### 🔹 Express.js
Framework minimaliste pour créer des serveurs web avec Node.js.

```js
const express = require('express');
const app = express();
app.listen(3000);
```

### 🔹 express.Router
Permet de structurer les routes en modules séparés.

```js
const router = express.Router();
router.get('/', (req, res) => {...});
```

### 🔹 express-session
Middleware pour garder en mémoire des informations utilisateur (comme un score).

```js
app.use(session({
  secret: 'clé_secrète',
  resave: false,
  saveUninitialized: true
}));
```

### 🔹 Méthodes HTTP
- **GET** pour afficher une page ou récupérer une ressource.
- **POST** pour envoyer des données (ex. : soumettre une réponse au quiz).

### 🔹 Formulaire HTML simple
```html
<form method="POST" action="/quiz">
  <input type="text" name="answer" />
  <button type="submit">Submit</button>
</form>
```

---

## ▶️ Lancer le projet

1. Cloner le dépôt
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Démarrer le serveur :
   ```bash
   node app.js
   ```
4. Ouvrir `http://localhost:3000` dans un navigateur.

---

## 💡 Prochaines améliorations possibles

- Choix multiples au lieu de texte libre
- Interface utilisateur stylée avec CSS
- Timer pour chaque question
- Leaderboard multi-utilisateurs

---

## 📁 Structure du projet

```
trivia-quiz/
├── app.js
├── routes/
│   └── quiz.js
├── data/
│   └── questions.js
├── package.json
└── README.md
```

---

## 👩‍💻 Réalisé par

Fatima Zahra Bourzgui — Full Stack Developer 👩‍💻  
```

---