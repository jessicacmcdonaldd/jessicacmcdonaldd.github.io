function jump(id) {
    document.getElementById("home").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("contact").style.display = "none";
    let select = document.getElementById(id);
    select.style.display = "block";
}


//make image bigger js
document.addEventListener('DOMContentLoaded', function() {
    const zoomImage = document.getElementById('zoomImg');

    zoomImage.addEventListener('click', function() {
        zoomImage.classList.toggle('zoomed');
    });
});

//slideshow
let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("projects");
    
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

//confetti
// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button');
    const canvas = document.querySelector('#confetti');
    
    // Initialize JSConfetti after the DOM is loaded and library is available
    const jsConfetti = new JSConfetti();

    // Event listener for button click to trigger confetti
    button.addEventListener('click', () => {
        event.stopPropagation();
        jsConfetti.addConfetti();
    });
});

