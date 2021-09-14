let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');

number.addEventListener('textInput',number_Verify);

function validated() {    //Se activa al hacer submit del form
    if (number.value.length <=9) {
        number.style.border = "2px solid red";
        number_error.style.display = "block";
        number.focus();
        number_error.innerText = "Ingresa un número válido"
        return false;
    }
} 

function number_Verify() {
    if (number.value.length = 10) {
        number.style.border = "1px solid silver";
        number_error.style.display = "none";
        return true;
    }
};