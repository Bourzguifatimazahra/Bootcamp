# Activités de la Journée 🚀

## 1. Exercice 1 : Giphy API 🎉
**Objectif** : Créer un formulaire permettant à l'utilisateur de rechercher des GIFs selon une catégorie spécifique et d'afficher un GIF aléatoire.

### Tâches réalisées :
- Création d'un formulaire avec un champ de recherche et un bouton pour soumettre le terme de recherche. 🔍
- Utilisation de l'API Giphy pour récupérer des GIFs correspondant à la catégorie saisie. 🎥
- Affichage dynamique des GIFs sur la page avec un bouton "Supprimer" pour chaque GIF. ❌
- Possibilité de supprimer tous les GIFs à l'aide d'un bouton "Supprimer tous les GIFs". 🧹

### Points clés :
- Recherche de GIFs en fonction de l'entrée de l'utilisateur. 💡
- Manipulation de l'API avec `fetch()`. 🌐
- Utilisation des événements `click` pour supprimer les GIFs individuellement ou tous à la fois. 🖱️

---

## 2. Exercice 2 : Promise.all() avec l'API Sunrise-Sunset 🌅
**Objectif** : Récupérer simultanément les heures de lever du soleil pour deux villes en utilisant `Promise.all()`.

### Tâches réalisées :
- Création d'un formulaire avec des champs pour saisir les coordonnées (latitude et longitude) de deux villes. 📍
- Utilisation de l'API Sunrise-Sunset pour récupérer l'heure du lever du soleil pour chaque ville. 🌞
- Affichage des résultats de manière simultanée après la résolution de toutes les promesses via `Promise.all()`. ⏳

### Points clés :
- Utilisation de `Promise.all()` pour exécuter plusieurs appels API simultanément. 🔗
- Attente de la résolution des deux promesses avant d'afficher les résultats. ⏰
- Amélioration de l'efficacité en utilisant `Promise.all()` plutôt que d'attendre les appels un par un. ⚡

---

## 3. Exercice 3 : Utilisation d'`async/await` pour les API Sunrise-Sunset 🌄
**Objectif** : Manipuler les appels API en utilisant `async/await` pour gérer les données asynchrones de manière plus fluide.

### Tâches réalisées :
- Utilisation de `async/await` pour simplifier l'exécution des appels asynchrones. 🧑‍💻
- Mise en place de la gestion des erreurs avec `try/catch` pour capturer les éventuelles erreurs de l'API. ⚠️

### Points clés :
- Gestion des promesses avec `async/await` pour une écriture plus linéaire et lisible du code asynchrone. 📝
- Mise en place d'une gestion des erreurs pour prévenir les problèmes en cas de requêtes échouées. 🚨

---

## 4. Exercice 4 : Gestion des erreurs avec `try/catch` et `async/await` ⚡
**Objectif** : Utiliser `try/catch` pour gérer les erreurs de manière efficace avec les promesses et `async/await`.

### Tâches réalisées :
- Implémentation d'un bloc `try/catch` pour capturer les erreurs et afficher un message d'erreur personnalisé en cas de problème lors des appels API. 🛑

### Points clés :
- Le bloc `try/catch` permet de gérer proprement les erreurs sans interrompre l'exécution du code. 🛠️
- Simplification de la gestion des erreurs dans les applications asynchrones. 🎯

---

### Conclusion 🎉
- L'objectif principal de ces exercices était de pratiquer l'utilisation des API avec `fetch()`, `Promise.all()`, et `async/await` en JavaScript. 🌐
- Ces techniques permettent d'améliorer la gestion des appels asynchrones et des erreurs dans les applications modernes. 💪
