# 📚 JavaScript Exercices - Analyse et Solutions

## 🚀 JavaScript Functions and Scope Example

### Description
This project demonstrates the use of JavaScript functions, variable scope (global and local), and how different variable declarations (`let`, `const`, and `var`) affect the behavior of the code. The code includes examples of functions that manipulate global and local variables, as well as how the scope of these variables changes within different blocks and functions.

- [Overview](#overview)
 
## Overview
This project demonstrates:
- Global vs local scope with JavaScript variables.
- Using `let`, `const`, and `var` for variable declarations.
- Manipulation of global variables using the `window` object.
- The effect of variable shadowing within different scopes (e.g., inside a function or an if-block).

## 🚀 Exercice 1 : Méthode map()

### Énoncé

Analyser le code suivant et prévoir le résultat :

```javascript
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
```

### Explication
La méthode `map()` parcourt chaque élément du tableau et applique la fonction de rappel. Étant donné que chaque élément est un nombre, la fonction retourne `num * 2` pour chaque élément.
 
## 🚀 Exercice 2 : Méthode reduce()

### Énoncé
Analyser le code suivant et prévoir le résultat :

```javascript
[[0, 1], [2, 3]].reduce((acc, cur) => {
  return acc.concat(cur);
}, [1, 2]);
```

### Explication
Le `reduce()` commence avec l'accumulateur initial `[1, 2]` et concatène chaque sous-tableau au tableau accumulateur.

### Résultat attendu

```javascript
[1, 2, 0, 1, 2, 3]
```

---

## 🚀 Exercice 3 : Méthode map() avec index

### Énoncé
Quel est la valeur de `i` ?

```javascript
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
```

### Explication
L’index `i` représente la position de chaque élément dans le tableau. Il varie de `0` à `5` dans cet exemple.

---

## 🚀 Exercice 4 : Tableaux imbriqués

### Énoncé
1. Transformer le tableau :

```javascript
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
```

### Solution

```javascript
console.log(array.flat(3));
// [1, 2, 3, 4, 5]
```

2. Transformation du tableau de salutations :

```javascript
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
```

### Solution

```javascript
const result = greeting.map(words => words.join(" ")).join(" ");
console.log(result);
// "Hello young grasshopper! you are learning fast!"
```

3. Transformation du chiffre piégé 

## 💡 A propos
Objectif de consolider les connaissances en JavaScript, en particulier les méthodes de tableaux.

