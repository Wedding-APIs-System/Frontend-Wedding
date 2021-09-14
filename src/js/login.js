function loginValidate() {

let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');
let API = 'https://wedding-325203.rj.r.appspot.com/login/';
let guest = document.getElementById('phone');
let url = API + guest.value;

if (guest.value.length == 10){
    fetch(url)
        .then(response => response.json())  
        .then(data => {
            if (data.detail == 'User not found'){
                number.style.border = "2px solid red";
                number_error.style.display = "block";
                number.focus();
                number_error.innerText = "Usuario No existe"
            } else {
                number.style.border = "none";
                number_error.style.display = "block";
                number_error.innerText = data;
                console.log(url);
                console.log(data);
            }
        })  
        .catch(error => console.log("Este es el error"+ error))
        
} else {
    number.style.border = "2px solid red";
    number_error.style.display = "block";
    number.focus();
    number_error.innerText = "Ingresa un número válido"
    console.log(url);
    console.log("Incorrecto");
}}



/* let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error'); */
/* if (data = "Familia") {
        number.style.border = "none";
        number_error.style.display = "none";   
        console.log(url);
        console.log("complete");
    } else {
        console.log("El usuario no existe")
    }  */   
/* number.addEventListener('textInput',number_Verify); */

/* function validated() {    //Se activa al hacer submit del form
    if (number.value.length <=9) {
        number.style.border = "2px solid red";
        number_error.style.display = "block";
        number.focus();
        number_error.innerText = "Ingresa un número válido"
        console.log(number.value);
        console.log(guest.value);
        return false;
    }
}   */

/* function number_Verify() {
    if (number.value.length = 10) {
        number.style.border = "1px solid silver";
        number_error.style.display = "none";
        console.log(number.value);
        console.log("Hola" + guest.value);
        return true;
    }
}; */

