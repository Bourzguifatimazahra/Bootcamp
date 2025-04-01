const mergeWords = (string) => (nextString) => 
  nextString === undefined ? string : mergeWords(string + ' ' + nextString);
 
console.log(mergeWords('There')('is')('no')('spoon.')()); // Outputs: "There is no spoon."

console.log(mergeWords('There')('is')('no')('spoon.')()); // Outputs: "There is no spoon."
