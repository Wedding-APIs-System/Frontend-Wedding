/* //CODIGO 1 CON SUBMIT

const form = document.getElementById('login_form');
let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');
const API = 'https://wedding-325203.rj.r.appspot.com/login/';


form.addEventListener('submit',(e) =>{
    let guest = document.getElementById('phone').value;
    let url = (`${API}${guest}`);
    e.preventDefault();
    if (guest.length == 10){
        fetch(url)
            .then(response => response.json())  
            .then(data => {
                if (data.detail == 'User not found'){
                    number.style.border = "2px solid red";
                    number_error.style.display = "block";
                    number.focus();
                    number_error.innerText = "Usuario No existe"
                                        
                }
                if (data.family_name = '') {
                    number.style.border = "none";
                    number_error.style.display = "block";
                    number_error.innerText = data;
                    console.log("esta es la url" + url);
                    console.log(data);
                    //function replace() {
                        //location.replace("http://127.0.0.1:5500/invitation.html")
                    //};
                }
            })  
            .catch(error => console.log("Este es el error"+ error))
    } 
    if (guest.length <10) {
        number.style.border = "2px solid red";
        number_error.style.display = "block";
        number.focus();
        number_error.innerText = "Ingresa un número válido"
        console.log(guest);
        console.log(guest.length);
        console.log(url);
        console.log("Incorrecto");
    }
})   */


//CODIGO 2 CON BUTTON ONCLICK

function loginValidate() {

    const number = document.forms['form']['phone_number'];
    const number_error = document.getElementById('phone_error');
    const API = 'https://wedding-325203.rj.r.appspot.com/login/';
    let guest = document.getElementById('phone').value;
    let url = (`${API}${guest}`);
    
    if (guest.length == 10){
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
                    number_error.innerText = data.family_name;
                    location.replace("http://127.0.0.1:5500/invitation.html");
                    sessionStorage.setItem('numberId', guest);
                }
            })  
            .catch(err => console.error("Este"+ err));            
            
    } else {
        number.style.border = "2px solid red";
        number_error.style.display = "block";
        number.focus();
        number_error.innerText = "Ingresa un número válido"
    }}




























//const form = document.getElementById('login_form');
//form.addEventListener('submit',(e) => {
/* function loginValidate() {

let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');
let API = 'https://wedding-325203.rj.r.appspot.com/login/';
let guest = document.getElementById('phone');
let url = API + guest.value;
let basic = false;
if (guest.value.length == 10){
    debugger
    fetch(url)
        .then(response => response.json())  
        .then(data => {
            if (data.detail == 'User not found'){
                number.style.border = "2px solid red";
                number_error.style.display = "block";
                number.focus();
                number_error.innerText = "Usuario No existe"
                basic = true;
                return basic;
            } else {
                number.style.border = "none";
                number_error.style.display = "block";
                number_error.innerText = data.family_name;
                console.log(url);
                console.log(data);
                basic = false;
                return basic;
            }
        })  
        .catch(error => console.log("Este es el error"+ error))

        e.preventDefault();
        console.log("Hola");
        console.log(basic);        
} else {
    number.style.border = "2px solid red";
    number_error.style.display = "block";
    number.focus();
    number_error.innerText = "Ingresa un número válido"
    e.preventDefault();
    
    } */
//}
//})








/* 
let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');
if (data = "Familia") {
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
}  */

/* function number_Verify() {
    if (number.value.length = 10) {
        number.style.border = "1px solid silver";
        number_error.style.display = "none";
        console.log(number.value);
        console.log("Hola" + guest.value);
        return true;
    }
}; */

