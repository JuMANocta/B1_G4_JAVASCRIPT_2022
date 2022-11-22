var div = document.getElementById('maDiv');
//alert(div);
let button = document.getElementById('monBouton');

function rgb(){
    return Math.floor(Math.random() * 255);
}

button.addEventListener('click', (event)=>{
    button.innerHTML = "Nb cliques : " + event.detail;
    let retourRGB = "rgb(" + rgb() + "," + rgb() + "," + rgb() + ")";
    document.body.style.backgroundColor = retourRGB;
}, false);
button.addEventListener('mouseenter', (event)=>{
    button.style.border = "5px solid red";
}, false);
button.addEventListener('mouseleave', (event)=>{
    button.style.border = "";
}, false);

let text = document.getElementById('text');
text.addEventListener('focus', (event)=>{
    event.target.value = "Vous avez le focus";
    button.disabled = true;
}, true);
text.addEventListener('blur', (event)=>{
    event.target.value = "Vous n'avez pas le focus";
    button.disabled = false;
}, true);


// créer une fonction check() qui renvoie la case cochée 
// indice l'input est un tableau
function check(){
    let input = document.getElementsByTagName('input');
    for(let i in input){
        if(input[i].checked){
            console.log(input[i].value);
        }
    }
}

// récupérer la selction du client
let list = document.getElementById('genre');
list.addEventListener('change', (event)=>{
    console.log(event.target.value);
    console.log(list.options[list.selectedIndex].value);
}, true);

// récupération du formulaire avec les boutons submit et reset
let form = document.getElementById('monFormulaire');
monFormulaire.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event)
    console.log(event.target)
    console.log("submit");
}, true);
monFormulaire.addEventListener('reset', (event)=>{
    console.log("reset");
    console.log(navigator.userAgent);
    console.log(navigator.appVersion);
    console.log(navigator.platform);
    console.log(navigator.userAgentData);
}, true);

// utilisation de l'objet Date()
let date = new Date();
console.log(date);
console.log(date.getFullYear());// récupère l'année
console.log(date.getMonth());// récupère le mois
console.log(date.getDate());// récupère le jour
console.log(date.getHours());// récupère l'heure
console.log(date.getMinutes());// récupère les minutes
console.log(date.getSeconds());// récupère les secondes
console.log(date.getMilliseconds());// récupère les millisecondes
console.log(date.getDay());// récupère le jour de la semaine
console.log(date.getTime());// récupère le nombre de millisecondes écoulées depuis le 1er janvier 1970
console.log(date.setDate(-1000));// modifie le jour
