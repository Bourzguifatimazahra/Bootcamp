 
# User Management API

Une API de gestion des utilisateurs construite avec Express.js, Knex.js, et Bcrypt pour la gestion des utilisateurs, y compris l'enregistrement, la connexion, la mise à jour et la récupération des utilisateurs.

## Prérequis

- Node.js
- PostgreSQL

## Installation

1. Clone le projet dans ton répertoire local :

```bash
git clone
```
2. Accède au répertoire du projet :

```bash
cd user-management-api
```

3. Installe les dépendances :

```bash
npm install
```

4. Configure ta base de données PostgreSQL et crée les tables nécessaires en exécutant les commandes SQL suivantes dans ton terminal PostgreSQL :

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);

CREATE TABLE hashpwd (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

5. Configure la connexion à ta base de données dans le fichier `config/knex.js` en remplaçant les valeurs par celles de ta propre configuration PostgreSQL.

## Lancer le serveur

Une fois les dépendances installées et la base de données configurée, lance le serveur :

```bash
npm start
```

Le serveur sera disponible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

## Endpoints API

### 1. **POST /api/user/register**
Permet à un utilisateur de s'enregistrer.

**Body (JSON) :**

```json
{
  "username": "nom_utilisateur",
  "email": "email@exemple.com",
  "first_name": "Prénom",
  "last_name": "Nom",
  "password": "mot_de_passe"
}
```

**Réponse :**

- `201`: Utilisateur créé avec succès.
- `400`: Erreur lors de la création de l'utilisateur.

---

### 2. **POST /api/user/login**
Permet à un utilisateur de se connecter.

**Body (JSON) :**

```json
{
  "username": "nom_utilisateur",
  "password": "mot_de_passe"
}
```

**Réponse :**

- `200`: Connexion réussie.
- `401`: Identifiants invalides.
- `404`: Utilisateur non trouvé.

---

### 3. **GET /api/user/users**
Récupère la liste de tous les utilisateurs.

**Réponse :**

- `200`: Liste des utilisateurs.

---

### 4. **GET /api/user/users/:id**
Récupère un utilisateur spécifique par ID.

**Réponse :**

- `200`: Détails de l'utilisateur.
- `404`: Utilisateur non trouvé.

---

### 5. **PUT /api/user/users/:id**
Met à jour les informations d'un utilisateur.

**Body (JSON) :**

```json
{
  "email": "nouvel_email@exemple.com",
  "first_name": "NouveauPrénom",
  "last_name": "NouveauNom"
}
```

**Réponse :**

- `200`: Utilisateur mis à jour.
- `400`: Erreur lors de la mise à jour.

## Tests

Tu peux tester l'API en utilisant des outils comme **Postman** ou **cURL** pour envoyer des requêtes HTTP aux endpoints ci-dessus.

## Technologies utilisées

- **Express.js** : Framework web pour la construction de l'API.
- **Knex.js** : SQL query builder pour interagir avec la base de données.
- **Bcryptjs** : Librairie pour le hachage des mots de passe.
- **PostgreSQL** : Base de données relationnelle pour stocker les utilisateurs et leurs mots de passe.
 

 