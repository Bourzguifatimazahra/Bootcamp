import { add, multiply } from './math.js';
import _ from 'lodash';

const a = 5;
const b = 3;

// Utilisation du module math.js pour additionner et multiplier
const sum = add(a, b);
const product = multiply(a, b);

// Utilisation de lodash pour arrondir les résultats
const roundedSum = _.round(sum, 2);
const roundedProduct = _.round(product, 2);

console.log(`Addition de ${a} et ${b} = ${roundedSum}`);
console.log(`Multiplication de ${a} et ${b} = ${roundedProduct}`);
