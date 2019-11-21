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
