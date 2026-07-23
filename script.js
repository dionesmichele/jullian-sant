// =========================================================
// 1. ESCONDER A NAVBAR AO ROLAR PARA BAIXO
// =========================================================
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset;

    // Se rolou para baixo e passou de 100px, esconde a navbar
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add("esconder-navbar");
    } else {
        // Se rolou para cima, mostra a navbar
        navbar.classList.remove("esconder-navbar");
    }
    lastScrollTop = scrollTop;
});

// =========================================================
// 2. MENU LATERAL (HAMBÚRGUER NO CELULAR)
// =========================================================
const segundoMenuToggle = document.querySelector('.segundo-menu-toggle');
const segundoMenuItems = document.querySelector('.segundo-menu-items');

segundoMenuToggle.addEventListener('click', () => {
    segundoMenuItems.classList.toggle('show');
});

// =========================================================
// 3. ANIMAÇÕES DE SURGIMENTO (AS FOTOS APARECENDO)
// =========================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Quando o elemento entra na tela...
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Revela o elemento
            observer.unobserve(entry.target); // Anima apenas uma vez
        }
    });
}, {
    threshold: 0.15 // Dispara quando 15% do elemento está visível
});

// Pega todos os elementos invisíveis e manda o observador vigiar
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));