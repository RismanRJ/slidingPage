let loginBtn = document.querySelector("#loginbtn");
let signinBtn = document.querySelector("#signinBtn");




let loginForm = document.querySelector(".login");

let signinForm= document.querySelector(".signup");

let outerBox = document.querySelector(".box1");


loginBtn.addEventListener('click',function(){
    loginForm.classList.toggle("active");
    signinForm.classList.remove("signup_active");

})
signinBtn.addEventListener('click',function(){
    
    loginForm.classList.toggle("active");
    signinForm.classList.toggle("signup_active");

})