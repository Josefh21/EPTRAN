var botao = document.getElementById("button");

botao.addEventListener('click', function(e){
    e.preventDefault
    
    setTimeout(function(){
        window.location.href = "//127.0.0.1:5500/SA/P%C3%A1ginas/TelaDeCadastro2.html"
    }, 2000)
})
