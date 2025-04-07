# 📅 Activités du jour 

## 🌟 Objectif pédagogique :
Découvrir, manipuler et maîtriser les Promesses (Promises) en JavaScript à travers des exercices progressifs.

---

## ✅ Exercices réalisés :

### 🔹 Exercice 1 : `compareToTen(num)`
- Fonction qui retourne une promesse selon que `num <= 10` ou non.
- Test avec `compareToTen(15)` (rejetée) et `compareToTen(8)` (résolue).

### 🔹 Exercice 2 : Promesse avec `setTimeout`
- Création d’une promesse qui se résout en 4 secondes avec la chaîne `"Succès !"`.

### 🔹 Exercice 3 : Résoudre et rejeter
- Utilisation de `Promise.resolve(3)` et `Promise.reject("Boo !")`.

### 🔹 Exercice 4 : `Promise.all()`
- Combinaison de plusieurs promesses (`Promise.resolve(3)`, `42`, et `setTimeout(...)`).
- Résultat attendu : `[3, 42, "foo"]`.

### 🔹 Exercice 5 : Analyse de `Promise.all()` avec `.map()`
- Multiplication asynchrone d’un tableau `[1, 2, 3]` pour obtenir `[2, 4, 6]`.

---

## Défis quotidiens :

### 🧩 Défi 1 : Jouer avec les mots

#### Fonctions :
- `makeAllCaps(words)` :
  - Transforme les chaînes en MAJUSCULES si toutes sont des strings.
- `sortWords(words)` :
  - Trie le tableau si sa longueur > 4.

#### Résultats :
- Trois tests effectués :
  - Rejet avec un nombre dans le tableau.
  - Rejet avec un tableau < 5 éléments.
  - Résolution avec un tableau valide de 5 mots.

### 🧩 Défi 2 : Traduction Morse

#### Fonctions :
- `toJs()` :
  - Convertit un JSON morse en objet JS.
- `toMorse(morseJS)` :
  - Demande à l'utilisateur un mot à convertir en Morse.
- `joinWords(morseTranslation)` :
  - Affiche la traduction en morse ligne par ligne dans le DOM.

#### Enchaînement :
- Utilisation des 3 fonctions en promesse chaînée.
- Gestion d’erreurs en cas de caractère non supporté.

---

## 🚀 Compétences renforcées :
- Création et gestion de Promesses
- Manipulation de `.then()`, `.catch()`, `.map()`, `Promise.all()`
- Gestion d’erreurs dans les chaînes de promesses
- Interaction utilisateur avec `prompt()` (navigateur)
- Manipulation d’objets et affichage dans le DOM

---

👩‍💻 **Réalisé par : Fatima Zahra Bourzgui**

🕓 Date : 07 Avril 2025
