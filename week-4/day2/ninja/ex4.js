// Utilisation d'une boucle for
const letters = ['x', 'y', 'z', 'z'];
const letterCount = {};

for (let letter of letters) {
  letterCount[letter] = (letterCount[letter] || 0) + 1;
}

console.log(letterCount); // Output: { x: 1, y: 1, z: 2 }

/*
Utilisation de reduce()

const letters = ['x', 'y', 'z', 'z'];

const letterCount = letters.reduce((obj, letter) => {
  obj[letter] = (obj[letter] || 0) + 1;
  return obj;
}, {});

console.log(letterCount); // Output: { x: 1, y: 1, z: 2 }
 */