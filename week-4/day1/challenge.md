# Groceries Challenge Project

## Description

Ce projet est un exercice pour manipuler des objets JavaScript, gérer des événements, et interagir avec le DOM. Il inclut des fonctionnalités comme l'affichage de fruits à partir d'un objet, la manipulation de variables en référence, et la mise à jour de données à l'aide d'une fonction JavaScript. De plus, une belle interface utilisateur a été ajoutée avec HTML et CSS, y compris des images de blog et une image de fond.

Le but de ce projet est d'apprendre à travailler avec des objets, des fonctions fléchées (arrow functions), et à comprendre la notion de passage par référence et par valeur en JavaScript.

## Fonctionnalités

1. **Affichage des fruits** : 
   - En cliquant sur le bouton "Afficher les fruits", une liste de fruits provenant de l'objet `groceries` est affichée à l'écran.

2. **Clonage et modification des données** :
   - En cliquant sur le bouton "Cloner et Modifier les données", l'objet `groceries` et la variable `client` sont modifiés. Les changements sont reflétés dans l'interface.

3. **Stylisation** :
   - La page inclut des images de blog, un fond d'écran attrayant, et des boutons stylisés pour une meilleure expérience utilisateur.

4. **Réactivité** : 
   - La mise en page utilise Flexbox pour une disposition fluide des images de blog.

## Structure du projet

- **HTML** : Le fichier principal est `index.html`, où le contenu de la page est défini.
- **CSS** : Les styles sont définis directement dans le fichier `<style>` dans le fichier HTML.
- **JavaScript** : Le code JavaScript est intégré dans le fichier HTML et gère l'affichage des fruits, les modifications d'objet et l'interactivité des boutons.

## Technologies utilisées

- **HTML** : Structure de la page.
- **CSS** : Styles et mise en page.
- **JavaScript** : Fonctionnalités interactives et manipulation du DOM.

## Images utilisées

- **Image de fond** : ![Image de fond](http://hawaiioceanviewproperties.com/wp-content/uploads/2017/03/th_FullSizeRender-2-3.jpg)
- **Images de blog** :
  - ![Image de blog 1](https://curlytales.com/wp-content/uploads/2020/04/grocery-getty-1.jpg)
  - ![Image de blog 2](https://img.money.com/2016/05/jet-grocery-delivery.jpg)

## Fonctionnement du code

1. **`displayGroceries()`** : Fonction fléchée qui affiche les fruits à partir de l'objet `groceries` en utilisant la méthode `forEach`.
2. **`cloneGroceries()`** : Fonction qui clone la variable `client`, modifie la variable `client` et les objets dans `groceries`, puis met à jour l'interface avec les nouvelles valeurs.
3. **Interactivité** : Lorsqu'on clique sur les boutons, les événements sont gérés par JavaScript pour mettre à jour et afficher les informations.
 