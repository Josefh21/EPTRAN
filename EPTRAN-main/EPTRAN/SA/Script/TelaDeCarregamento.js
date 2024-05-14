/* ---------------------- Transição 1 e 2 ---------------------- */

var um = document.getElementById("TelaUm");
var myFunction = function(){
um.style.display = "none";
}

setTimeout(myFunction, 2000);

/* ---------------------- Transição 2 e 3 ---------------------- */

var carregador = document.getElementById("carregador");
var myFunction = function(){
carregador.style.display = "block";
}

setTimeout(myFunction, 3000);


