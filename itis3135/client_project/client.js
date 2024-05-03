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
// // Wait for the DOM content to fully load
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('#button');
//     const canvas = document.querySelector('#confetti');
    
//     // Initialize JSConfetti after the DOM is loaded and library is available
//     const jsConfetti = new JSConfetti();

//     // Event listener for button click to trigger confetti
//     button.addEventListener('click', () => {
//         event.stopPropagation();
//         jsConfetti.addConfetti();
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const popupButton = document.getElementById('popupButton');

    const openPopup = () => {
        const popupMessage = 'Click below for UVM course list!';

        const popupWindow = window.open('', '_blank', 'width=800,height=600');

        if (popupWindow) {
            popupWindow.document.write(`
                <html>
                <style>
                    a{
                        // text-decoration: none; 
                        color: 	yellow;
                    }
                    a:hover{
                        color: #FAF9F6;
                    }
                </style>
                <head>
                    <title>UVM Electrical Engineering Course List Link</title>
                </head>
                <body style="text-align: center; font-family: Arial, sans-serif; background-color: #1E3F20; color: 	#FAF9F6";>
                    <h2>${popupMessage}</h2>
                    <p><a href="https://catalogue.uvm.edu/undergraduate/courses/courselist/ee/">UVM Electrical ENGR Course List</p>
                </body>
                </html>
            `);
        } else {
            alert('Popup window was blocked by the browser. Please enable popups for this site.');
        }
    };

    popupButton.addEventListener('click', openPopup);
});


