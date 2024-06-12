var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;
var elements = Array.from(document.getElementsByClassName('ativ'));
var buttonsElements = Array.from(document.getElementsByClassName('ativ-button'));
var ativColor = ['rgb(114, 142, 58)','rgb(215, 60, 74)', 'rgb(100, 45, 110)', 'rgb(254, 188, 3)' ];
var buttonColor = ['rgba(72,87,40,255)', 'rgba(137,39,47,255)','rgba(59,35,64,255)', 'rgba(146,109,0,255)'];
var a = 0;
console.log(buttonsElements)
console.log(elements)
for(let i = 0; i < elements.length; i++){
    if(a > 3){
    a = 0;
    }
    elements[i].style.backgroundColor = ativColor[a]
    console.log(buttonsElements[i])
    if(buttonsElements[i]){
    buttonsElements[i].style.backgroundColor = buttonColor[a]
}
    a++
}
    // 
menu.addEventListener('click', function(){
    popUp.remove("menuHidden");
    popUp.toggle("menuShow");
    opac.toggle("opacBlack");
    document.body.style.overflow = document.body.style.overflow == "hidden"? "auto": "hidden";
    if(!popUp.contains("menuShow")){
    popUp.add("menuHide");
    opac.add("opacHide");
    document.body.style.overflow = "auto"
    }
    else{
        popUp.remove("menuHide");
        opac.remove("opacHide");
        document.body.style.overflow = "hidden"
    }
})