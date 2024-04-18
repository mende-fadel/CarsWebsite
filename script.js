document.addEventListener("DOMContentLoaded", function() {
    setInterval(animateHeader, 500);
});

function animateHeader() {
    var headerTitle = document.getElementById("header-title");
    var text = headerTitle.innerText;
    var newText = text.substring(1) + text.substring(0, 1);
    headerTitle.innerText = newText;
}

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > header.offsetHeight) {
            nav.classList.add("fixed-nav");
        } else {
            nav.classList.remove("fixed-nav");
        }
    });
});

