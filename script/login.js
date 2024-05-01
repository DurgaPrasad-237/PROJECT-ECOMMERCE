let showpass = document.querySelector('.showpass');
let Password = document.getElementById('Password');
showpass.addEventListener('click',function(){
    if(Password.type === "password"){
        Password.type="text";
        showpass.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        showpass.style.color = "red";
    }
    else{
        Password.type="password";
        showpass.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        showpass.style.color = "#82ae45";
    }
})
