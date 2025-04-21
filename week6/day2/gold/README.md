 
# 📝 Todo List API

Une API Express avec une base de données PostgreSQL utilisant Knex.js pour gérer une todo list.

## ⚙️ Installation

1. Clone le projet
2. Installe les dépendances

```bash
npm install
```

3. Configure la base de données dans `knexfile.js`

4. Crée la migration :

```bash
npx knex migrate:make create_tasks_table
```

5. Lance la migration :

```bash
npx knex migrate:latest
```

6. Démarre le serveur :

```bash
npx nodemon index.js
```

---

## 🛠️ Routes de l'API

| Méthode | Route             | Description                   |
|--------|-------------------|-------------------------------|
| GET    | `/api/todos`      | Obtenir toutes les tâches     |
| GET    | `/api/todos/:id`  | Obtenir une tâche par son id  |
| POST   | `/api/todos`      | Créer une nouvelle tâche      |
| PUT    | `/api/todos/:id`  | Modifier une tâche            |
| DELETE | `/api/todos/:id`  | Supprimer une tâche           |

 
## 📄 Technologies utilisées

- Node.js
- Express.js
- PostgreSQL
- Knex.js
- Nodemon
```

---

## 🧪 2. Postman 
- `GET /api/todos`
- `GET /api/todos/:id`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`
