// permet d'affifer les images mignatures en full scren
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

//Changer le style de la nav barre selon le défilement sur la page
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("Navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "nav-bar" + " card" + " animate-top" + " blanc";
    } else {
        navbar.className = navbar.className.replace(" card animate-top blanc", "");
    }
}

// Utilisé pour basculer le menu des petits écrans dans un menut déroulant
function toggleFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("voir") == -1) {
        x.className += " voir";
    } else {
        x.className = x.className.replace(" voir", "");
    }
}