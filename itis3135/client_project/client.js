function jump(id) {
    document.getElementById("home").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("contact").style.display = "none";
    let select = document.getElementById(id);
    select.style.display = "block";
}