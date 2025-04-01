 
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
 
console.log(addToTen(3)); // 13