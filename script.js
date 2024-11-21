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
