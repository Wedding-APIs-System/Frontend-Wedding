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
                    number_error.style.color ="blue";
                    number_error.innerText = data.family_name;
                    location.replace("https://wedding-apis-system.github.io/Frontend-Wedding/invitation.html");
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