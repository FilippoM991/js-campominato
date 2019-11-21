var listaBombe = [];
// var numero_iterazioni = 0;
while(listaBombe.length < 16) {
    var bomba = generaBombe(1, 100);
    if(!listaBombe.includes(bomba)) {
        listaBombe.push(bomba);
    }
    // numero_iterazioni++;
    // console.log('numero iterazioni: ' + numero_iterazioni);
}
console.log(listaBombe);

function generaBombe(min, max) {
    var random = Math.floor(Math.random()* (max-min+1))+ min;
    return random;
}
var esplosione = false;
for (var i = 0; i < 84 && esplosione == false ; i++) {
    var sceltaUtente = parseInt(prompt("Scrivi un numero da 1 a 100"));
        if (listaBombe.includes(sceltaUtente)) {
            esplosione = true;
        }
}

if (esplosione) {
    console.log("Hai perso");
} else {
    console.log("hai vinto");
}
