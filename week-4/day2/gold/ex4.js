 
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const result = array.flat(3); 
console.log(result); // [1, 2, 3, 4, 5]
 
console.log([[1],[2],[3],[[[4]]],[[[5]]]].flat(3)); 
 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
/*const result = greeting.map(words => words.join(" ")); 
console.log(result);*/ 
// ["Hello young grasshopper!", "you are", "learning fast!"]
 
const message = result.join(" ");
console.log(message); 
// "Hello young grasshopper! you are learning fast!"
 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity)); 
// [3]