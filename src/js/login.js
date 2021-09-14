
/* const form = document.getElementById('login_form');
let number = document.forms['form']['phone_number'];
let number_error = document.getElementById('phone_error');
let API = 'https://wedding-325203.rj.r.appspot.com/login/';
let guest = document.getElementById('phone');
let url = API + guest.value;

form.addEventListener('submit',(e) =>{
    if (guest.value.length == 10){
        fetch(url)
            .then(response => response.json())  
            .then(data => {
                if (data.detail == 'User not found'){
                    number.style.border = "2px solid red";
                    number_error.style.display = "block";
                    number.focus();
                    number_error.innerText = "Usuario No existe"
                    // e.preventDefault();
                }
                if (data.family_name = '') {
                    number.style.border = "none";
                    number_error.style.display = "block";
                    number_error.innerText = data;
                    console.log("esta es la url" + url);
                    console.log(data);
                    //  e.preventDefault();
                }
            })  
            .catch(error => console.log("Este es el error"+ error))
            e.preventDefault();
    } 
    if (guest.value.length <10) {
        number.style.border = "2px solid red";
        number_error.style.display = "block";
        number.focus();
        number_error.innerText = "Ingresa un número válido"
        console.log(guest);
        console.log(guest.value);
        console.log(guest.value.length);
        console.log(url);
        console.log("Incorrecto");
        e.preventDefault();
    }
})
 */


const form = document.getElementById('login_form');
form.addEventListener('submit',(e) => {
//function loginValidate() {

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
                //form.action = "../../invitation.html"
                console.log(url);
                console.log(data);
                basic = false;
                return basic;
            }
        })  
        .catch(error => console.log("Este es el error"+ error))

        //e.preventDefault(basic);
        console.log("Hola");
        console.log(basic);        
} else {
    number.style.border = "2px solid red";
    number_error.style.display = "block";
    number.focus();
    number_error.innerText = "Ingresa un número válido"
    e.preventDefault();
    
    }
//}
})







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

