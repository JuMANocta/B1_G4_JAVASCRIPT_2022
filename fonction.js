// création d'une function pour multiplier un nombre par 2
function byTwo(){
    let number = prompt('Entrer un nombre :');
    console.log(number * 2);
}
byTwo();

// les variables globales et locales
var message = "je suis un message global";
function showMessage(){
    var message = "je suis un message local";
    console.log(message);
}
console.log(message);
showMessage();
console.log(message);

// fonction anonyme
var showMessage = ()=>{
    console.log('je suis une fonction anonyme');
}
showMessage();