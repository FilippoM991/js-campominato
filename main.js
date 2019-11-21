var listaBombe = [];
for (var i = 0; i < 15; i++) {
    var bomba = generaBombe(1, 100)
    listaBombe.push(bomba)
}
console.log(listaBombe);

function generaBombe(min, max) {
    var random = Math.floor(Math.random()* (max-min+1))+ min;
    return random;
}
