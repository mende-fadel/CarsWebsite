document.addEventListener("DOMContentLoaded", function() {
    setInterval(animateHeader, 500);
});

function animateHeader() {
    var headerTitle = document.getElementById("header-title");
    var text = headerTitle.innerText;
    var newText = text.substring(1) + text.substring(0, 1);
    headerTitle.innerText = newText;
}
