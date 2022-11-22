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
