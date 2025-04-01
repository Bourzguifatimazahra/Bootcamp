const data = [
    { name: 'Butters', age: 3, type: 'dog' },
    { name: 'Cuty', age: 5, type: 'rabbit' },
    { name: 'Lizzy', age: 6, type: 'dog' },
    { name: 'Red', age: 1, type: 'cat' },
    { name: 'Joey', age: 3, type: 'dog' },
    { name: 'Rex', age: 10, type: 'dog' },
  ];
  
  // Utilisation de reduce() pour calculer la somme des âges des chiens en années humaines
  const totalDogAge = data
    .filter(animal => animal.type === 'dog')
    .reduce((sum, dog) => sum + dog.age * 7, 0);
  
  console.log(`La somme des âges des chiens en années humaines est : ${totalDogAge}`); // Output: 154
  