// les objets contiennent trois choses
// 1. les propriétés
// 2. le constructeur
// 3. les méthodes
// 4. les événements
//

let maVariable = "je suis une chaîne de caractères";
console.log(maVariable.length);
console.log(maVariable.toUpperCase());

// les tableaux
let monTableau = ['pomme', 'poire', 'banane'];
console.log(monTableau[0]);
monTableau[0] = 'fraise';
console.log(monTableau[0]);

// opérations sur les tableaux
monTableau.push('cerise');
// ajoute cerise à la fin du tableau
monTableau.push('pastèque', 'pêche', 'melon');
// ajoute pomme à la fin du tableau
console.log(monTableau);
monTableau.unshift('framboise');
// ajoute framboise au début du tableau
monTableau.shift();
// supprime le premier élément du tableau
monTableau.pop();
// supprime le dernier élément du tableau

// parcourir un tableau
for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i]);
}

// objet litéral soit un tableau avec des indices crées
let famille = {
    pere: 'pierre',
    mere: 'marie',
    enfant: 'hervé',
    cousine: 'pauline',
    animal: 'chien'
};
console.log(famille.pere);
console.log(famille['mere']);
famille['oncle'] = 'jean';
famille.germain = 'grégorie';

// parcourir un objet avec un for in
for(let cle in famille){
    console.log(cle + ' : ' + famille[cle]);
}

// ajouter des prénoms dans un tableau et les afficher
let prenoms = [];
let prenom;
while(prenom = prompt('Entrer un prénom :')){
    if(prenom == ''){
        break;
    }else{
        prenoms.push(prenom);
    }
}
let prenomsString ="";
for(let i in prenoms){
    prenomsString += prenoms[i] + ' ';
}
console.log(prenomsString);