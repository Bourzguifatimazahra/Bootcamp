function searchWord(sentence, word) {
    const count = sentence.split(' ').filter(w => w === word).length;
    return `'${word}' was found ${count} time(s).`;
  }
  
  console.log(searchWord('The quick brown fox', 'fox')); 
  // Output: "'fox' was found 1 time(s)."
  
  console.log(searchWord('The quick brown fox jumps over the lazy fox', 'fox'));
  // Output: "'fox' was found 2 time(s)."
  