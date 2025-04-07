 function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("L'objet Morse est vide !");
    } else {
      resolve(morseObj);
    }
  });
}
 
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Entrez un mot ou une phrase :").toLowerCase(); 
    const translation = [];

    for (let char of userInput) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Le caractère "${char}" n'existe pas dans le code Morse.`);
        return;
      }
    }

    resolve(translation);
  });
}
 
function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");
  const resultDiv = document.createElement("pre");
  resultDiv.textContent = output;
  document.body.appendChild(resultDiv);
}
 
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(translation => {
    joinWords(translation);
  })
  .catch(error => console.log("Erreur :", error));
