(()=>{
    let bouton = document.getElementById('monTimer');
    let timeLeft = 5
    let timerID = setTimeout(()=>{
        clearInterval(intervalID)
        bouton.innerHTML = "Fin du game"
        bouton.style.backgroundColor = "red";
        //alert("Vous avez perdu");
    }, 5000);
    let intervalID = setInterval(()=>{
        bouton.innerHTML = "Annuler le timer avant " + --timeLeft + " secondes";
    }, 1000);
    bouton.onclick = ()=>{
        clearTimeout(timerID);
        clearInterval(intervalID);
        bouton.style.backgroundColor = "green";
        bouton.innerHTML = "Timer annulé";
    }
    let monImage = document.getElementById('flipper');
    monImage.onclick = ()=>{
        retour = monImage.style.opacity = parseFloat(monImage.style.opacity) - 0.1;
        if(retour <= 0){
            monImage.style.opacity = 1;
        }
    }
})();
