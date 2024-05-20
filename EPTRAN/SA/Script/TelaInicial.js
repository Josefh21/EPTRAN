var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;

menu.addEventListener('click', function(){
    popUp.remove("menuHidden");
    
    popUp.toggle("menuShow");
    opac.toggle("opacBlack");
    if(!popUp.contains("menuShow")){
    popUp.add("menuHide");
    opac.add("opacHide")
    }
    else{
        popUp.remove("menuHide");
        opac.remove("opacHide")
    }
})