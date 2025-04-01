 
function kgToGrams(weightInKg) {
    return weightInKg * 1000;
}

console.log(kgToGrams(5)); // 5000
 
const kgToGramsExp = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(kgToGramsExp(5)); // 5000

const kgToGramsArrow = (weightInKg) => weightInKg * 1000;

console.log(kgToGramsArrow(5)); // 5000