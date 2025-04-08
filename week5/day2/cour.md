# Résumé du Cours : API et Gestion des Promesses

## 1. API (Application Programming Interface)
- Une API est un ensemble de règles permettant à un programme d'interagir avec un autre.
- L'API Giphy est utilisée pour récupérer des GIFs à partir d'un mot-clé, par exemple "hilarious".
- L'API Sunrise-Sunset permet de récupérer l'heure de lever du soleil pour une localisation donnée (latitude et longitude).

### Utilisation de `fetch()` :
- **`fetch(url)`** : Effectue une requête HTTP et retourne une promesse.
- **.then()** : Permet de manipuler les résultats de la requête.
- **.catch()** : Capture les erreurs de la requête.

## 2. Promesses en JavaScript
- Une **promesse** est un objet représentant la valeur finale ou l’échec d’une opération asynchrone.
- Les promesses ont trois états :
  - **Pending** : En attente de résolution.
  - **Fulfilled** : Résolue avec succès.
  - **Rejected** : Rejetée avec une erreur.

### `Promise.all()`
- **`Promise.all([promise1, promise2])`** : Attends que toutes les promesses dans le tableau soient résolues ou qu’une erreur soit rejetée.
- Utilisé pour exécuter des appels asynchrones simultanément.

## 3. `async/await`
- **`async`** : Déclare une fonction qui retourne toujours une promesse.
- **`await`** : Attend qu'une promesse soit résolue ou rejetée dans une fonction `async`.
- Cela permet d'écrire du code asynchrone de manière plus lisible et linéaire.

### Exemple d’utilisation :
```javascript
const getSunrise = async (lat, lon) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
    const data = await response.json();
    return new Date(data.results.sunrise).toLocaleTimeString();
};
```

## 4. Gestion des erreurs
- Utilisation de **`try/catch`** pour capturer les erreurs lors des appels asynchrones.
- Exemple :
```javascript
try {
    const result = await someAsyncFunction();
} catch (error) {
    console.log('Error:', error);
}
```

---

### Conclusion
- La gestion des promesses avec `Promise.all()` et `async/await` simplifie la gestion des requêtes API.
- Les exercices pratiques ont permis de renforcer la compréhension des mécanismes asynchrones en JavaScript.
```