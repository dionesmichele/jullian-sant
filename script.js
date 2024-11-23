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

function enviarMensagem(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Coletar os dados do formulário
    var nome = document.getElementById('nome').value;
    var ideia = document.getElementById('ideia').value;

    // Codificar os dados para a URL
    var texto = encodeURIComponent(Olá, meu nome é ${nome}. ${ideia});

    // Número do WhatsApp (substitua pelo número correto)
    var numeroWhatsApp = "5511348672585"; // Exemplo: +55 (31) 99999-9999

    // Criar o link do WhatsApp com a mensagem
    var urlWhatsApp = "https://wa.me/${numeroWhatsApp}?text=${texto};"

    // Redirecionar para o link do WhatsApp
    window.location.href = urlWhatsApp;
}

