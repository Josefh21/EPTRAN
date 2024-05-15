var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;

menu.addEventListener('click', function(){
    popUp.toggle("menuHidden");
    popUp.toggle("menuShow");
    opac.toggle("opacBlack");
})
