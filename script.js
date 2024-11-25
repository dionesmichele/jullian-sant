let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add("hidden"); // Esconde a navbar
    } else {
        navbar.classList.remove("hidden"); // Mostra a navbar
    }

    lastScrollTop = scrollTop;
});

// Seleciona o botão e os itens do menu secundário
const segundoMenuToggle = document.querySelector('.segundo-menu-toggle');
const segundoMenuItems = document.querySelector('.segundo-menu-items');

// Adiciona evento de clique ao botão do menu secundário
segundoMenuToggle.addEventListener('click', () => {
    segundoMenuItems.classList.toggle('show');
});
