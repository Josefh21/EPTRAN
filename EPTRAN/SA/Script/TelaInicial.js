var menu = document.getElementById("menu");
var popUp = document.getElementById("menuHidden");
var opac = document.getElementById("opacBlack");

menu.addEventListener('click', function(){
    if(popUp.style.display == "none"){
    popUp.style.display = "block";
    opac.style.display = "block";
    }
    else{
        popUp.style.display = "none";
        opac.style.display = "none";
    }
})

