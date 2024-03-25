function jump(id) {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("when").style.display = "none";
    document.getElementById("folk").style.display = "none";
    document.getElementById("folk_rock").style.display = "none";
    document.getElementById("rock_roll").style.display = "none";
    document.getElementById("pop").style.display = "none";
    document.getElementById("jazz").style.display = "none";
    document.getElementById("why").style.display = "none";
    document.getElementById("playlist").style.display = "none";
    document.getElementById("sources").style.display = "none";
    let select = document.getElementById(id);
    select.style.display = "block";
}

var clickableImages = document.querySelectorAll('.image');

        clickableImages.forEach(function(image) {
            image.addEventListener('click', function() {
                var audioId = this.getAttribute('data-audio-id');
                var audio = document.getElementById(audioId);
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        });


//start code for playlist

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}
        

function currentSlide(n) {
showSlides(slideIndex = n);
}
        
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("songs");
    let bullets = document.getElementsByClassName("bullet");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    bullets[slideIndex-1].className += " active";
}