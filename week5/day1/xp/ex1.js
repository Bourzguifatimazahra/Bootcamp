function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} est inférieur ou égal à 10`); // un message de succès
      } else {
        reject(`${num} est supérieur à 10`); // un message d'erreur
      }
    });
  }
  
  // Test : devrait rejeter
  compareToTen(15) // 15 est supérieur à 10
    .then(result => console.log(result)) 
    .catch(error => console.log(error));
  
  // Test : devrait résoudre
  compareToTen(8) // 8 est inférieur ou égal à 10
    .then(result => console.log(result))
    .catch(error => console.log(error));
