document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ANIMATION DES SECTIONS AU DÉFILEMENT ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- 2. MENU BURGER INTERACTIF ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });


    // --- 3. EFFET MACHINE À ÉCRIRE (TYPEWRITER) ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const textToType = typewriterElement.innerHTML;
        typewriterElement.innerHTML = '';

        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typewriterElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // --- LA PARTIE SUR LE CURSEUR A ÉTÉ SUPPRIMÉE ICI ---


    // --- 5. EFFET 3D SUR LES CARTES ---
    const cards = document.querySelectorAll('.skill-item, .project-card, .timeline-content');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = -y / 20;
            const rotateY = x / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });


    // --- 6. BARRE DE PROGRESSION AU DÉFILEMENT ---
    const progressBar = document.getElementById('progress-bar');
    if(progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = `${scrollPercent}%`;
        });
    }
});