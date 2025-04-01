const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
 
console.log(curriedSum(30)(1)); // 31