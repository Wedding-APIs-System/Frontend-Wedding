const family = document.getElementById('family_user');
const asistants = document.getElementById('number_guests');
const API = 'https://wedding-325203.rj.r.appspot.com/login/';
const API_post = 'https://wedding-325203.rj.r.appspot.com/confirmation/';
const guest = sessionStorage.getItem('numberId');
let url = (`${API}${guest}`);
let url_post = (`${API_post}${guest}`);

fetch(url)
    .then(response => response.json())
    .then(data => {
        family.innerText = data.family_name;
        asistants.innerText = "Tienes disponible " + "(" + data.Number_of_assistants + ")" + " cupos";
        console.log(data);
    })
    .catch(err => console.error("Este"+ err));
 
console.log(sessionStorage.getItem('numberId'));

function send() {
    Swal.fire({
        icon: 'success',
        title: 'Confirmación Exitosa',
        showConfirmButton: false,
        timer: 1500
    })
}



// Send Data to API

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const asistencia = document.getElementById('guest').value;
    const alergias = document.getElementById('alergy').value;
    const comentarios = document.getElementById('description').value;


    const formData = new FormData(this);
    fetch(url_post, {
        method: 'PUT',
        body: JSON.stringify ({
        attendance_confirmation: true,
        allergies: alergias,
        additional_comments: comentarios,
        }),
    }) 
    .then ((response) => response.json())
    .then ((json) => console.log(json))
    .catch(error => console.error(error))
})

