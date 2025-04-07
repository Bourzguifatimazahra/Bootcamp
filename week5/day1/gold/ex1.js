const promise1 = Promise.resolve(3);
const promise2 = 42; // C’est déjà une valeur (non-promise), donc Promise.all() la traite comme Promise.resolve(42)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [3, 42, "foo"]
  })
  .catch(error => {
    console.log("Une promesse a été rejetée :", error);
  });

/*
- `Promise.all()` prend un tableau d'éléments. Si un élément n’est pas une promesse (comme `42`), il est automatiquement converti en promesse résolue.
- Elle attend que toutes les promesses soient résolues.
- Ici :
  - `promise1` résout immédiatement à 3.
  - `promise2` est traité comme `Promise.resolve(42)`.
  - `promise3` se résout après 3 secondes avec la valeur `"foo"`.
- Donc, après 3 secondes, on reçoit : [3, 42, "foo"]
*/
