const btnToggle = document.querySelector('.sidebar_tab');
btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

function cambieImage(a) {
    document.getElementById("tab").src=a;
};

const countDownDate = new Date("Oct 30, 2021 16:00").getTime();


// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    let today = new Date().getTime();
      
    // Find the diference between today and the count down date
    let distance = countDownDate - today;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in <p> id=countdown
    document.getElementById("countdown").innerHTML ="FALTA " + days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
      
    // When count down is over, Finish
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "COMENZÓ";
    }
  }, 1000);