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
