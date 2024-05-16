var eye = document.getElementById("eye");
var password = document.getElementById("senha");


eye.addEventListener('click', function(){
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    password.type = (password.type === "password") ? "text" : "password";
})
