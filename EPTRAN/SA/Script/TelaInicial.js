var menu = document.getElementById("menu");
var popUp = document.getElementById("menuHidden");
var opac = document.getElementById("opacBlack").classList;

menu.addEventListener('click', function(){
    if(popUp.style.display == "none"){
    popUp.style.display = "block";
    opac.add("opacBlack");
    }
    else{
        popUp.style.display = "none";
        opac.remove("opacBlack");
    }
})

let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

