function allTruthy(...args) {
    // Vérifie si tous les éléments sont truthy
    return args.every(arg => Boolean(arg));
}

// Exemples d'utilisation :
console.log(allTruthy(true, true, true));  // ➞ true
console.log(allTruthy(true, false, true)); // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // ➞ false
