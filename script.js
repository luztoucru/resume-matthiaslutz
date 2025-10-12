document.addEventListener('DOMContentLoaded', () => {

    /**
     * 1. ANIMATION DES SECTIONS AU DÉFILEMENT (ON SCROLL)
     * Ce code observe les sections marquées avec la classe '.hidden'
     * et leur ajoute la classe '.show' lorsqu'elles deviennent visibles.
     */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    /**
     * 2. MENU BURGER INTERACTIF
     * Ce code gère le clic sur l'icône du burger pour ouvrir/fermer
     * le menu de navigation sur mobile et animer les liens.
     */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Affiche ou cache la navigation
        nav.classList.toggle('nav-active');

        // Anime les liens un par un
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Anime l'icône du burger en croix
        burger.classList.toggle('toggle');
    });


    /**
     * 3. EFFET MACHINE À ÉCRIRE (TYPEWRITER)
     * Ce code prend le texte de l'élément avec l'ID 'typewriter',
     * le vide, puis le réécrit lettre par lettre.
     */
    const typewriterElement = document.getElementById('typewriter');
    // Vérifie si l'élément existe avant de lancer l'animation
    if (typewriterElement) {
        const textToType = typewriterElement.innerHTML;
        typewriterElement.innerHTML = '';

        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typewriterElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Vitesse de frappe (en millisecondes)
            }
        }

        // Lance l'animation après un court délai
        setTimeout(typeWriter, 500);
    }

});