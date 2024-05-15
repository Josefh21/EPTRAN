/* ---------------------- Transição 1 e 2 ---------------------- */

var um = document.getElementById("TelaUm");
var myFunction = function(){
um.style.display = "none";
}

setTimeout(myFunction, 2000);

/* ------------------ Transição Carregamento ------------------ */

var carregador = document.getElementById("carregador");
var myFunction = function(){
carregador.style.display = "block";
}

setTimeout(myFunction, 3000);

/* ------------------------------------------------------------- */