//start date and time

let timeElement = document.querySelector(".time");
let dateElement = document.querySelector(".date");

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) 
{
    let hours12 = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let isAm = date.getHours() < 12; 
    
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * 
 * @param {Date} date 
 */
function formatDate(date) 
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]; 

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

}

setInterval(() => 
{
    let now  = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);

}, 200);

//start user input and asking abt day

function userReturn() 
{
    let txt1 = document.getElementById('name');
    let output1 = document.getElementById('output1');
    let txt2 = document.getElementById('feeling');
    let output2 = document.getElementById('output2');
    let feeling = "";

    if (txt2.value.toLowerCase() == "bad") 
    {
        feeling = "Sorry to hear that, hope your day gets better!"
    } else if (txt2.value.toLowerCase() == "good") 
    {
        feeling = "Glad to hear you are doing well today!"
    }
    

    return output1.innerHTML = "Welcome to Jumping Monkey Enterprises, " + txt1.value + ". " + feeling; 
    
}

// start shape with different numbered sides
function findPolygonName() 
{
    var userInput = document.getElementById("favoriteNumber").value;
    var positiveInteger = Math.abs(Math.round(parseFloat(userInput)));
    var polygonNames = ["", "Monogon", "Bigon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    if (positiveInteger >= 0 && positiveInteger <= 10) 
    {
        alert("The polygon with " + positiveInteger + " sides is a " + polygonNames[positiveInteger]);
    } 
    else 
    {
        alert("Please enter a number between 0 and 10.");
    }
}

// start jumping monkey buttons

const home = document.createElement('a');
home.setAttribute('href', "inex.html");
home.innerHTML = "HOME";

const introduction = document.createElement('a');
introduction.setAttribute('href', "introduction.html");
introduction.innerHTML = "Intro";

document.getElementsByTagName('nav')[0].appendChild(home);
document.getElementsByTagName('nav')[0].appendChild(introduction);


function jumpingMonkey() {
    let showImageButton = document.getElementById("monkey_picture");
    let myImage = document.getElementById("monkey_img");
    myImage.style.display="block";
}
function rareColors() {
    let rare_colors = document.getElementById("rare-colors");
    rare_colors.style.display = "block";
}
function monkeySpecies() {
    let species = document.getElementById("monkey-species");
    species.style.display="block";
}
function monkeyCount() {
    let barrel = document.getElementById("monkey-count");
    barrel.style.display="block";
}
function monkeyCute() {
    let cute = document.getElementById("monkey-cute");
    cute.style.display="block";
}
