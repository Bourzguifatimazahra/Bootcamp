function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === "string")) {
      const upperCased = words.map(word => word.toUpperCase());
      resolve(upperCased);
    } else {
      reject("Tous les éléments du tableau ne sont pas des chaînes !");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Le tableau ne contient pas plus de 4 mots !");
    }
  });
}

// Test 1 : Rejeté car présence d’un nombre
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(" Résultat :", result))
  .catch(error => console.log("Erreur :", error));

// Test 2 : Rejeté car tableau trop court
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(" Résultat :", result))
  .catch(error => console.log("Erreur :", error));

// Test 3 : Résolu et trié
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(" Résultat :", result))
  .catch(error => console.log("Erreur :", error));
