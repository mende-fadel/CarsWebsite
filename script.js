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

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez les liens des marques de voiture
    var francaisesLink = document.getElementById("francaises");
    var italiennesLink = document.getElementById("italiennes");
    var anglaisesLink = document.getElementById("anglaises");
    var americaines= document.getElementById("americaines");
    // Ajoutez des écouteurs d'événements de clic
    francaisesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêchez le comportement de lien par défaut
        window.location.href = "lien_vers_site_externe_francaises"; // Remplacez par l'URL du site externe pour les voitures françaises
    });
    italiennesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêchez le comportement de lien par défaut
        window.location.href = "lien_vers_site_externe_italiennes"; // Remplacez par l'URL du site externe pour les voitures italiennes
    });
    anglaisesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêchez le comportement de lien par défaut
        window.location.href = "lien_vers_site_externe_anglaises"; // Remplacez par l'URL du site externe pour les voitures anglaises
    });
    americainesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêchez le comportement de lien par défaut
        window.location.href = "lien_vers_site_externe_americaines"; // Remplacez par l'URL du site externe pour les voitures anglaises
    });
    // Ajoutez des écouteurs d'événements de clic pour d'autres marques de voiture si nécessaire
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const images = ["cars/audi.png", "cars/Luxury-Car-PNG-Images-HD.png","cars/pexels-mike-noga-3541743.jpg"]; // Remplacez ces noms d'image par les noms de vos propres images
    let currentIndex = 0;

    // Fonction pour changer l'image de fond
    function changeBackgroundImage() {
        header.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length; // Incrémente l'index et assure la boucle sur les images
    }

    // Appel de la fonction pour la première fois
    changeBackgroundImage();

    // Appeler la fonction toutes les secondes pour changer l'image de fond
    setInterval(changeBackgroundImage, 5000); // 1000 millisecondes = 1 seconde
});


