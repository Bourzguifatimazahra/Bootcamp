function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result); // [2, 4, 6]
    });
  
  /*
  - `arr.map(timesTwoAsync)` applique la fonction `timesTwoAsync` à chaque élément du tableau [1, 2, 3].
  - Cela donne un tableau de promesses : [Promise(2), Promise(4), Promise(6)]
  - `Promise.all()` attend que toutes les promesses soient résolues, puis retourne leurs valeurs dans le même ordre.
  - Résultat final : [2, 4, 6]
  */
  