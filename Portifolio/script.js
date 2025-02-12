const firebaseConfig = {
    apiKey: "AIzaSyAf5yCbJIfaaZY0K1R5j2tTq6n-2rrIjJc",
    authDomain: "portfolio-contact-form-pb.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-pb-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-pb",
    storageBucket: "portfolio-contact-form-pb.firebasestorage.app",
    messagingSenderId: "962946421119",
    appId: "1:962946421119:web:831f9ef1fbb9a9e095ca4a"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('portfolio-contact-form-pb');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, msgContent);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 1500);

    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });

};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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

