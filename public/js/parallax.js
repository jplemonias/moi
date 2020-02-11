// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("Navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "nav-bar" + " card" + " animate-top" + " blanc";
    } else {
        navbar.className = navbar.className.replace(" card animate-top blanc", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("voir") == -1) {
        x.className += " voir";
    } else {
        x.className = x.className.replace(" voir", "");
    }
}