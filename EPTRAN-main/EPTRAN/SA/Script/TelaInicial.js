var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;

function toggleMenu(){
    subMenu.classList.toggle("play");
}

menu.addEventListener('click', function(){
    popUp.toggle("menuHidden");
    popUp.toggle("menuShow");
    opac.toggle("opacBlack");
})

let subMenu = document.getElementById("subMenu");

