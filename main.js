// la difficoltà camvbia il numero max dell' intervallo da cui creare bombe e scegliere numeri
var difficoltà = parseInt(prompt("Scegli la difficoltà, 0 = facile  1 = medio  2 = difficile"));
var numeroMax = 0;
switch(difficoltà) {
    case 0:
        numeroMax = 100;
        break;
    case 1:
        numeroMax = 80;
        break;
    case 2:
        numeroMax = 50;
        break;
    default:
        numeroMax = 100;
}
// creao lista bombe
var listaBombe = [];
while(listaBombe.length < 16) {
    var bomba = generaBombe(1, numeroMax);
    // ho usato la varibile creata sopra al posto del valore max fisso
    if(!listaBombe.includes(bomba)) {
        listaBombe.push(bomba);
    }
}
console.log(listaBombe);
// funzione per creare numeri random per lista bombe
function generaBombe(min, max) {
    var random = Math.floor(Math.random()* (max-min+1))+ min;
    return random;
}
// creo var che si incrementerà ad ogni ciclo per sapere quanti tentativi ci sono stati
var numeroTentativi = 0;
var esplosione = false;
// utilizzo funzione per rendere più generico tentativiPossibili
var tentativiPossibili = numeroMaxTentativi();
// uso ciclo for perchè..mi piace controllarli, w la variabile sentinella
for (var i = 0; i < tentativiPossibili && esplosione == false ; i++) {
    var sceltaUtente = parseInt(prompt("Scrivi un numero da 1 a " + numeroMax ));
    numeroTentativi++;
    if (listaBombe.includes(sceltaUtente)) {
        esplosione = true;
        // se la variabile diventa true si ferma tutto
    }
}
// funzione che rende più generica e scalibile il numero massimo di tentativi positivi che può fare l ' utente'
function numeroMaxTentativi() {
    var numero = numeroMax - listaBombe.length;
    return numero;
}
// output a schermo
if (esplosione) {
    console.log("Hai pestato una bomba, hai perso");
    document.writeln("Hai pestato una bomba, hai perso....");
} else {
    console.log("Hai appena usato tutta la fortuna che ti spettava in questa vita");
    document.writeln("Hai appena usato tutta la fortuna che ti spettava in questa vita");
}
console.log("Numero passi fatti senza morire: " + (numeroTentativi - 1) );
document.writeln("numero passi fatti senza morire: " + (numeroTentativi - 1));
