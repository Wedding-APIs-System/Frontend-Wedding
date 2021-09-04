const btnToggle = document.querySelector('.sidebar_tab');
btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');    
});