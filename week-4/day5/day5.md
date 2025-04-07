
# Vérificateur d'Anagrammes

Un programme JavaScript qui vérifie si deux chaînes de caractères sont des anagrammes l'une de l'autre.

## Fonctionnalités

- Vérifie si deux mots/phrases sont des anagrammes
- Ignore les espaces et la casse (majuscules/minuscules)
- Retourne un booléen (true/false)
- Utilisation simple avec une seule fonction

## Comment utiliser

### Dans un projet Node.js

1. Copiez la fonction dans votre fichier JavaScript :

```javascript
function estAnagramme(chaine1, chaine2) {
    const nettoyer = (str) => str.replace(/\s/g, '').toLowerCase();
    
    const chaineNettoyee1 = nettoyer(chaine1);
    const chaineNettoyee2 = nettoyer(chaine2);
    
    if (chaineNettoyee1.length !== chaineNettoyee2.length) {
        return false;
    }
    
    const trier = (str) => str.split('').sort().join('');
    
    return trier(chaineNettoyee1) === trier(chaineNettoyee2);
}
```

2. Utilisez la fonction :

```javascript
console.log(estAnagramme("Astronomer", "Moon starer")); // true
console.log(estAnagramme("Hello", "World")); // false
```

### Dans un navigateur

1. Ajoutez la fonction dans un fichier JavaScript
2. Appelez-la depuis votre HTML ou la console du navigateur

## Exemples d'anagrammes

- "Astronomer" ↔ "Moon starer"
- "School master" ↔ "The classroom"
- "The Morse Code" ↔ "Here come dots"
- "Listen" ↔ "Silent"
- "Funeral" ↔ "Real fun"

## Comment ça marche

1. Supprime tous les espaces des chaînes
2. Convertit toutes les lettres en minuscules
3. Vérifie si les chaînes ont la même longueur
4. Trie les caractères des deux chaînes
5. Compare les chaînes triées

## Tests

Vous pouvez tester avec ces valeurs :

```javascript
console.log(estAnagramme("Chien", "Niche")); // true
console.log(estAnagramme("Gare", "Rage")); // true
console.log(estAnagramme("Hello", "Hello")); // true (identique)
console.log(estAnagramme("Test", "Taste")); // false
console.log(estAnagramme("Un", "Deux")); // false (longueurs différentes)
```

## Contribution

Les contributions sont les bienvenues ! Ouvrez une issue ou soumettez une pull request pour :
- Améliorer l'efficacité
- Ajouter de nouvelles fonctionnalités
- Corriger des bugs
