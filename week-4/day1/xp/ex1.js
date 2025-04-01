// Fonction 1 : Vérifie si a > 1 et affiche la valeur de a
function funcOne() {
    let a = 5; 
    if (a > 1) {
        a = 3;  
    }
    alert(`inside the funcOne function ${a}`);  // Affiche: inside the funcOne function 3
}
funcOne();

// Déclaration globale de la variable a
let a = 0;

// Fonction 2 : Change la valeur globale de a
function funcTwo() {
    a = 5;  
}

// Fonction 3 : Affiche la valeur globale de a
function funcThree() {
    alert(`inside the funcThree function ${a}`);  // Affiche: inside the funcThree function 0 puis 5
}
funcThree();
funcTwo();
funcThree();

// Fonction 4 : Déclare une variable globale via l'objet window
function funcFour() {
    window.a = "hello";  
}

// Fonction 5 : Affiche la valeur actuelle de a
function funcFive() {
    alert(`inside the funcFive function ${a}`);  // Affiche: inside the funcFive function hello
}
funcFour();
funcFive();

// Redéclaration de la variable globale a
a = 1;

// Fonction 6 : Utilise une variable locale a
function funcSix() {
    let a = "test";  
    alert(`inside the funcSix function ${a}`);  // Affiche: inside the funcSix function test
}
funcSix();

// Redéclaration de la variable globale a
a = 2;

// Bloc if avec une variable locale
if (true) {
    let a = 5; 
    alert(`in the if block ${a}`);  // Affiche: in the if block 5
}
alert(`outside of the if block ${a}`);  // Affiche: outside of the if block 2
