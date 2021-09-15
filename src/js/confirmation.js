const API = 'https://wedding-325203.rj.r.appspot.com/login/';
const guest = sessionStorage.getItem('numberId');
let url = (`${API}${guest}`);

fetch(url)
    .then(response => response.json())
    .then(data => {
        family.innerText = data.family_name;
        console.log(data);
    })
    .catch(err => console.error("Este"+ err));
 
console.log(sessionStorage.getItem('numberId'));
const family = document.getElementById('family_user');
//family.innerText = data.family_name;
