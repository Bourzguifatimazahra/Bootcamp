# 🌌 Star Wars Web App - AJAX API Project

## 📖 Description

Cette application web permet d’afficher aléatoirement des personnages de l’univers **Star Wars** grâce à l’API [SWAPI.tech](https://www.swapi.tech/). Chaque personnage est affiché avec ses caractéristiques (nom, taille, genre, année de naissance, planète d'origine).

L’utilisateur peut :
- Générer un nouveau personnage à chaque clic
- Voir l’historique des personnages générés
- Ajouter des personnages aux favoris (stockés localement)
- Naviguer dans une interface responsive avec un effet de chargement

---

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3** (responsive design)
- **JavaScript (ES6+)**
- **AJAX (Fetch API, async/await)**
- **Font Awesome** (pour les icônes de chargement et d’erreur)
- **localStorage** (pour sauvegarder les favoris)

---

## 🚀 Fonctionnalités

- ⚡ Génération de personnage aléatoire
- 🔁 Affichage d’un indicateur de chargement (spinner)
- ❌ Message d’erreur en cas d’échec API
- 🧾 Historique des personnages affichés
- ⭐ Ajout aux favoris avec persistance via `localStorage`
- 📱 Responsive design (mobile-friendly)

---

## 🧠 Concept de travail : Plan Journalier

### **Conception & Setup**

- Création du dépôt Git
- Initialisation des fichiers : `index.html`, `style.css`, `script.js`
- Recherche et documentation de l’API [SWAPI](https://www.swapi.tech/)
- Définition de la structure HTML de base
- Définition du style principal et palette de couleurs galactique

### **Fonctionnalité principale : Génération & Affichage**

- Intégration du bouton "Get Random Character"
- Récupération des données de l’API via `fetch()` et `async/await`
- Affichage dynamique du nom, genre, taille, naissance, planète
- Affichage du **loader spinner** lors de la récupération

### **Ajout de l'historique et des erreurs**

- Création de la section "🧾 Historique"
- Affichage en temps réel des personnages déjà générés
- Gestion des erreurs API avec message personnalisé et icône

### **Favoris & LocalStorage**

- Ajout du bouton ⭐ "Add to Favorites"
- Sauvegarde des favoris en `localStorage`
- Affichage automatique des favoris sauvegardés au chargement

### **Responsive Design & Finitions**

- Ajout des media queries pour mobile/tablette
- Optimisation de l’UI (marges, paddings, contraste)
- Ajout de commentaires dans le code
- Tests de l’expérience utilisateur

---

## ✅ Résultat final

L’application est fonctionnelle, interactive et agréable à utiliser, offrant une vraie expérience utilisateur autour de l’univers Star Wars. Le projet met en pratique des compétences clés en développement web moderne (JS async, DOM, AJAX, stockage local, responsive design).


## 👩‍💻 Développé par

**Fatima Zahra Bourzgui**  
 

