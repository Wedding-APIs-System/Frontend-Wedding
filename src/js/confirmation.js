const family = document.getElementById('family_user');
const API = 'https://wedding-325203.rj.r.appspot.com/login/';
const API_post = 'https://wedding-325203.rj.r.appspot.com/confirmation/';
const guest = sessionStorage.getItem('numberId');
let url = (`${API}${guest}`);
let url_post = (`${API_post}${guest}`);

fetch(url)
    .then(response => response.json())
    .then(data => {
        family.innerText = data.family_name;
        console.log(data);
    })
    .catch(err => console.error("Este"+ err));
 
console.log(sessionStorage.getItem('numberId'));

/* function send() {
    Swal.fire({
        icon: 'success',
        title: 'Confirmación Exitosa',
        showConfirmButton: false,
        timer: 1500
    })
} */



// Send Data to API

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('funciona');
    console.log(url_post);
    const formData = new FormData(this);
    fetch(url_post, {
        method: 'PUT',
        body: formData
    }) 
    .then(function (response){
        return response.text();
    }) 
    .then(function (text) {
        console.log(text);
    })
    .catch(function (error) {
        console.error(error);
    })
})

