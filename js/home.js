document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function countdownTimer() {
    const endDate = new Date("December 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}

const timerInterval = setInterval(countdownTimer, 1000);


function initMap() {
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 8,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Include Google Maps API script in your HTML
// <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>


