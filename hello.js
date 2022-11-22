// alert('Bonjour le monde !')
// affiche une boîte de dialogue
var mavariable = 'Bonjour le monde !'
// déclare une variable
let letvariable = 'Bonjour le monde !'
// déclare une variable
let text = 'je suis un texte en français j\'ai donc des apostrophes'

var number1 = 3 , number2 = 4, result;
result = number1 + number2;
// alert(result);

var number3 = 3;
number3 = number3 + 1;
// alert(number3);

var number4 = 3;
number4 += 1;
// alert(number4);

typeof number1 // "number"
let text1, number5 = 3, number6 = 4;
typeof text1 // "undefined"
text1 = number5 + '' + number6;
typeof text1 // "string"
console.log(typeof text1); // "string"

//récupération d'une valeur saisie par l'utilisateur
//let username = prompt('Quel est votre nom ?');
// alert('Bonjour ' + username + ' !');

//récupération d'une valeur saisie par l'utilisateur pour additionner deux nombres
//let number7 = prompt('Entrez un premier nombre :');
//let number8 = prompt('Entrez un second nombre :');
// alert(parseInt(number7) + parseInt(number8));


// la fonction confirm permet une interaction de l'utilisateur à l'exécution du script
// let confirmation = confirm('Voulez-vous exécuter le script ?');
// if (confirmation) {
//     alert('Le script a bien été exécuté.');
// }else{
//     alert('Le script n\'a pas été exécuté.');
//     window.location.href = 'https://www.google.com';
// }

// une condition afin de choisir un étage
let floor = prompt('Entrer l\'étage ou vous voulez aller :');
if (floor == 0) {
    alert('Vous êtes déjà au rez-de-chaussée.');
}else if (floor == 1) {
    alert('Vous êtes au premier étage.');
}else if (floor == 2) {
    alert('Vous êtes au deuxième étage.');
}else if (floor == 3) {
    alert('Vous êtes au troisième étage.');
}else{
    alert('Désolé, cet étage n\'existe pas.');
}

// gérer une liste de possibilités avec switch
//let porte = prompt('Entrer le numéro de votre porte mystère :');
// choisir un nombre aléatoire entre 1 et 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random)
switch (random) {
    case 1:
        alert('Vous avez gagné une voiture.');
        break;
    case 2:
        alert('Vous avez gagné un voyage.');
        break;
    case 3:
        alert('Vous avez gagné un chèque de 1000€.');
        break;
    default:
        alert('Désolé, vous n\'avez rien gagné.');
        break;
}

// mettre en place une condition ternaire
let genre = prompt('Quel est votre genre ?');
let message = (genre == 'femme') ? 'Bonjour madame.' : 'Bonjour monsieur.';
alert(message);

// fournir un commentaire selon l'age
let age = prompt('Quel est votre âge ?');
if (age <= 0 && age >= 6) {
    alert('Vous êtes mineur.');
}else if (age >= 7 && age <= 17) {
    alert('Vous êtes ado.');
}else if (age >= 18 && age < 120) {
    alert('Vous êtes adulte.');
}else{
    alert('Vous êtes un robot.');
}

// while
var prenoms = ''; // mémoriser les prénoms
var prenom; // le prénom saisi
while(true){ // boucle infinie
    prenom = prompt('Entrer un prénom :'); // saisie du prénom
    if (prenom){ // si le prénom est saisi
        prenoms += prenom + ' '; // on l'ajoute à la liste
    }else{ // si le prénom n'est pas saisi ou vide
        break; // on sort de la boucle
    }
}
alert('Vous avez entré les prénoms suivants : ' + prenoms);

// boucle for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// boucle for avec les prenoms
let nbprenom= 0
for(var prenoms='', prenom; true;){
    prenom = prompt('Entrer un prénom :');
    if (prenom){
        prenoms += prenom + ' ';
        nbprenom++;
    }else{
        break;
    }
}
alert('Vous avez entré '+ nbprenom +'prénoms les suivants : ' + prenoms);

// création d'une function pour multiplier un nombre par 2
function byTwo(){
    let number = prompt('Entrer un nombre :');
    console.log(number * 2);
}
byTwo();

