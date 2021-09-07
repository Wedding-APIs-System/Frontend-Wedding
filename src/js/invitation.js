const btnToggle = document.querySelector('.sidebar_tab');
btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    //btnToggle.innerHTML = '<img src="https://image.flaticon.com/icons/png/512/1231/1231223.png">';    
});