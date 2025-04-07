## 🧠 **Résumé de cours – Promesses (Promises) en JavaScript**

### 📌 **1. Qu’est-ce qu’une Promesse ?**
Une **promesse** est un objet qui représente la **valeur d'une opération asynchrone**, disponible maintenant, dans le futur ou jamais.

```js
const promesse = new Promise((resolve, reject) => {
  // Opération asynchrone
});
```

---

### ✅ **2. Créer et utiliser une promesse**

#### Exemple :
```js
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    num <= 10 ? resolve("OK") : reject("Trop grand");
  });
}
```

```js
compareToTen(15)
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

---

### ⏳ **3. Utilisation de `setTimeout` pour simuler une promesse lente**
```js
const promiseSuccess = new Promise((resolve) => {
  setTimeout(() => resolve("Succès !"), 4000);
});
```

---

### 💥 **4. Résoudre ou rejeter directement**
```js
Promise.resolve(3).then(console.log); // Résolu avec : 3
Promise.reject("Boo !").catch(console.error); // Rejeté avec : Boo !
```

---

### 🧩 **5. `Promise.all()` : exécuter plusieurs promesses**
- Elle attend que **toutes les promesses soient résolues**.
- Si une promesse échoue, tout est rejeté.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(resolve => setTimeout(resolve, 3000, 'foo'));

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)); // [3, 42, "foo"]
```

---

### 🧠 **6. `Promise.all()` avec .map()**
```js
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
Promise.all(arr.map(timesTwoAsync)).then(console.log); // [2, 4, 6]
```
---

### 📝 **7. Défi : Manipulation de mots**

```js
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(w => typeof w === "string")) {
      resolve(words.map(w => w.toUpperCase()));
    } else {
      reject("Tous les éléments ne sont pas des chaînes !");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    words.length > 4 ? resolve(words.sort()) : reject("Trop peu de mots !");
  });
}
```

---

### 📡 **8. Défi Morse**

#### Étapes :
1. Convertir un JSON en objet JavaScript avec `toJs()`
2. Traduire le mot avec `toMorse(morseObj)`
3. Afficher la traduction sur le DOM avec `joinWords()`

```js
toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(console.error);
```

---

### 📚 **Points clés à retenir**
- `new Promise((resolve, reject) => { ... })`
- `.then()` pour traiter la réussite
- `.catch()` pour traiter l’échec
- `Promise.all()` pour exécuter plusieurs promesses simultanément
- Les promesses sont idéales pour gérer les opérations asynchrones : API, timers, etc.

---
 