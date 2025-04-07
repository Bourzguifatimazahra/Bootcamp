// Résoudre avec la valeur 3
Promise.resolve(3)
  .then(value => console.log("Résolu avec :", value));

// Rejeter avec "Boo !"
Promise.reject("Boo !")
  .catch(error => console.log("Rejeté avec :", error));
