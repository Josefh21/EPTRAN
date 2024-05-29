var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;
var elements = Array.from(document.getElementsByClassName('ativ'));
var ativColor = ['rgb(114, 142, 58)','rgb(215, 60, 74)', 'rgb(100, 45, 110)', 'rgb(254, 188, 3)' ]
var i = 0;
elements.forEach((atv) => {
if(i > 3){
    i = 0;
}
atv.style.backgroundColor = ativColor[i]
i++
});

menu.addEventListener('click', function(){
    popUp.remove("menuHidden");
    
    popUp.toggle("menuShow");
    opac.toggle("opacBlack");
    if(!popUp.contains("menuShow")){
    popUp.add("menuHide");
    opac.add("opacHide")
    }
    else{
        popUp.remove ("menuHide");
        opac.remove("opacHide")
    }
})



