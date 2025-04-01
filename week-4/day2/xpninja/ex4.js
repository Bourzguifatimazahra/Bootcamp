function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  console.log(reverseArray([1, 2])); // Output: [2, 1]
  console.log(reverseArray([])); // Output: []
  console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
   // Utilisation de la méthode reverse()
  function reverseArray(arr) {
    return arr.reverse();
  }
  