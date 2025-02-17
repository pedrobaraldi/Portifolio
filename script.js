document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe .article-skills (que contêm as imagens)
    const articles = document.querySelectorAll('.article-skills');

    // Seleciona o parágrafo onde o texto será exibido
    const textoAqui = document.querySelector('.div1-skills p');

    // Mensagem padrão quando nenhuma imagem está com o mouse sobre ela
    const mensagemPadrao = "*Passe o cursor do mouse no card para ler*";

    // Textos específicos para cada imagem (na mesma ordem das imagens no HTML)
    const textos = [
        "HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas da web. Ele estrutura o conteúdo na web, definindo elementos como cabeçalhos, parágrafos, links e imagens.",
        "CSS (Cascading Style Sheets) é usado para estilizar e layout páginas da web. Ele permite controlar cores, fontes, espaçamentos e o posicionamento dos elementos na página.",
        "JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas da web, como animações, interatividade e comunicação com servidores.",
        "Sass (Syntactically Awesome Style Sheets) é uma extensão do CSS que adiciona recursos avançados como variáveis, aninhamento, mixins e funções, facilitando a escrita e manutenção de estilos.",
        "React é uma biblioteca JavaScript para construir interfaces de usuário. Ele permite criar componentes reutilizáveis e gerencia o estado da aplicação de forma eficiente.",
        "Next.js é um framework React que permite funcionalidades como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e roteamento avançado, otimizando o desempenho e SEO.",
        "Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele é conhecido por sua simplicidade e flexibilidade, permitindo integração gradual em projetos existentes.",
        "Nuxt.js é um framework Vue.js que simplifica o desenvolvimento de aplicações universais, oferecendo recursos como renderização do lado do servidor e geração de sites estáticos.",
        "Firebase é uma plataforma de desenvolvimento de aplicativos que oferece serviços em nuvem, como banco de dados em tempo real, autenticação, hospedagem e funções serverless.",
        "Figma é uma ferramenta de design de interface gráfica baseada na web. Ele permite colaboração em tempo real e a criação de protótipos interativos.",
        "Git é um sistema de controle de versão distribuído para rastrear mudanças no código-fonte. Ele facilita a colaboração entre desenvolvedores e o gerenciamento de diferentes versões de um projeto.",
        "SQL (Structured Query Language) é uma linguagem padrão para gerenciar e manipular bancos de dados relacionais. Ele permite consultar, inserir, atualizar e deletar dados de forma eficiente."
    ];

    // Inicializa o texto padrão
    textoAqui.textContent = mensagemPadrao;

    // Adiciona eventos de mouseover e mouseout para cada imagem
    articles.forEach((article, index) => {
        article.addEventListener('mouseover', () => {
            // Exibe o texto correspondente ao passar o mouse sobre a imagem
            textoAqui.textContent = textos[index];
        });

        article.addEventListener('mouseout', () => {
            // Restaura a mensagem padrão ao remover o mouse da imagem
            textoAqui.textContent = mensagemPadrao;
        });
    });
});




// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAf5yCbJIfaaZY0K1R5j2tTq6n-2rrIjJc",
    authDomain: "portfolio-contact-form-pb.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-pb-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-pb",
    storageBucket: "portfolio-contact-form-pb.firebasestorage.app",
    messagingSenderId: "962946421119",
    appId: "1:962946421119:web:831f9ef1fbb9a9e095ca4a",
};

firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref("portfolio-contact-form-pb");

// Função para enviar o formulário
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", submitForm);
});

function submitForm(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Verifica se os dados estão sendo capturados
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    // Salvar no Firebase
    saveMessages(name, emailid, msgContent);

    // Enviar e-mail via EmailJS
    sendEmail({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });

    // Exibe o alerta e depois oculta
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 1500);

    // Limpa o formulário após o envio
    document.getElementById("contactForm").reset();
}

// Função para salvar as mensagens no Firebase
const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

// Função para enviar e-mail para o EmailJS
const sendEmail = (messageData) => {
    emailjs
        .send("service_fhepozs", "template_f8jgydi", {
            to_name: "Pedro Baraldi",
            name: messageData.name, // Agora corresponde a {{name}}
            email: messageData.emailid, // Agora corresponde a {{email}}
            message: messageData.msgContent, // Já estava correto
        })
        .then((response) => {
            console.log("E-mail enviado com sucesso:", response);
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
        });
};

// Função para obter o valor de um elemento
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile");

    if (menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile";
    } else {
        menuMobile.className = "menu-mobile-active";
    }
}

const list = document.querySelector(".list");

const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
    if (direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
}