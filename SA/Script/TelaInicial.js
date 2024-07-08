var menu = document.getElementById("menu");
var popUp = document.getElementById("miniMenu").classList;
var opac = document.getElementById("opacBlack").classList;

/*----------------------colorindo as divs------------------------*/

var elements = Array.from(document.getElementsByClassName('ativ'));
var buttonsElements = Array.from(document.getElementsByClassName('ativ-button'));
var ativColor = ['rgb(114, 142, 58)','rgb(215, 60, 74)', 'rgb(100, 45, 110)', 'rgb(254, 188, 3)' ];
var buttonColor = ['rgba(72,87,40,255)', 'rgba(137,39,47,255)','rgba(59,35,64,255)', 'rgba(146,109,0,255)'];

var colorDivs = (arr, isAtiv) => {
    var a = 0;
    var isNextNumber = true
    for(let i = 0; i < arr.length; i++){
        if(a > 3){
        a = 0;
        }

        if(isAtiv){
            arr[i].style.backgroundColor = ativColor[a];
            a++
        }
        else{
            arr[i].style.backgroundColor = buttonColor[a];
            if(!isNextNumber){
            a++;
            }
            isNextNumber = !isNextNumber;
        }
    }
}

colorDivs(elements, true);
colorDivs(buttonsElements, false);

/*---------------------------------menu suspenso------------------------------------------*/

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









var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log('aaaa')
  if (event.target == modal) {
    modal.style.display = "none";
  }
}