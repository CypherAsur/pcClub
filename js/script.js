"use strict";

fetch("../dataBase/base.json")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));

let users;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    users = [
        {
            user_id: 1,
            email: "shmidt@gmail.com",
            phone: "+7 (999) 222-34-35",
            password: "asdD1234",
            role: "superadmin",
        },
        {
            user_id: 2,
            email: "shmidt@gmail.com",
            phone: "+7 (999) 999-99-99",
            password: "Admin1234",
            role: "admin",
        },
    ];
}



// Регистрация и вход

localStorage.setItem("users", JSON.stringify(users));

// const seats = document.querySelector('.places-map')
// console.log(document);

const reg = document.querySelector(".reg");
const login = document.querySelector(".log-in");
const acc = document.querySelector('.acc')

console.log(login);


const error = reg.querySelector(".error");
const errorEmail = reg.querySelector(".error-email");
const errorlog = login.querySelector(".error");



const form = reg.querySelectorAll(".form");
const formLog = login.querySelector(".form");


const bg = document.querySelector(".back");
// console.log(form);

const log = document.querySelector(".login");
// console.log(log);

const passwordInput = reg.querySelector(".password");
const usernameInput = reg.querySelector(".username");
const phoneInput = document.querySelectorAll(".phone");

const passwordInputLog = login.querySelector(".password");
const usernameInputLog = login.querySelector(".username");
const phoneInputLog = login.querySelector(".phone");

const logBtn = document.querySelector(".logBtn");

// logBtn.addEventListener("mouseenter", () => {
//     logBtn.firstElementChild.src = "img/logBtnHower.svg";
// });
// logBtn.addEventListener("mouseout", () => {
//     logBtn.firstElementChild.src = "img/logBtnActive.svg";
// });

phoneInput.forEach(element => {
    element.addEventListener("input", function (e) {
        let value = this.value.replace(/\D/g, "");
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        let formattedValue = "+7 (";
        if (value.length > 1) {
            formattedValue += value.substring(1, 4);
        }
        if (value.length >= 4) {
            formattedValue += ") " + value.substring(4, 7);
        }
        if (value.length >= 7) {
            formattedValue += "-" + value.substring(7, 9);
        }
        if (value.length >= 9) {
            formattedValue += "-" + value.substring(9, 11);
        }
        this.value = formattedValue;
    });
});

// Регистрация

function generateUniqueId(users) {
    let id;
    do {
        id = Math.floor(Math.random() * 10000);
    } while (users.find(user => user.id === id));
    return id;
}

form[0].addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(123);

    const password = passwordInput.value;
    const userName = usernameInput.value;
    const phone = phoneInput[0].value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(usernameInput.value)) {
        errorEmail.style.display = "flex";
        errorEmail.firstElementChild.textContent = "Пожалуйста, введите корректный email.";
        e.preventDefault();
        console.log(1);

        return;
    }

    const passwordRequirementsMet =
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        (password.match(/\d/g) || []).length >= 4;

    if (!passwordRequirementsMet) {
        error.style.display = "flex";
        error.firstElementChild.textContent =
            "Пароль должен содержать минимум 8 символов, одну заглавную букву и минимум 4 цифры.";
        e.preventDefault();
        console.log(2);

        return;
    }

    if (users.find(user => user.phone == phone)) {
        errorlog.style.display = "flex";
        console.log(3);

        errorlog.firstElementChild.textContent =
            "пользователь с таким номером телефона уже зарегестрировань";
    } else {

        users.push({
            id: generateUniqueId(users),
            email: userName,
            password: password,
            phone: phone,
            role: "user",
        });

        localStorage.setItem("users", JSON.stringify(users));

        passwordInput.value = '';
        usernameInput.value = '';
        phoneInput.value = '';

        errorEmail.style.display = "none";
        error.style.display = "none";

        closeModal("reg");
        openModal('log-in');
    }
});

// Вход


formLog.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInputLog.value;
    const phone = phoneInputLog.value;

    const user = users.find(user => user.phone == phone && user.password == password);

    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);


        let userNow = JSON.parse(sessionStorage.getItem('currentUser'));

        acc.innerHTML = `<p>${userNow.email}</p>
            <p onclick="logOut()">ВЫХОД</p>`;

        phoneInputLog.value = '';
        passwordInputLog.value = '';
        errorlog.style.display = "none";
        closeModal("log-in");
        bg.style.display = "none";
        if (user.role == 'admin') {
            window.location.assign("../adminPage/index.html");
        } else if (user.role == 'superadmin') {
            window.location.assign("../superadminPage/index.html");
        }
    } else {
        errorlog.style.display = "flex";
        errorlog.firstElementChild.textContent =
            "Неправильный логин или пароль.";
        return
    }
})

// Выход

const logOut = () => {
    sessionStorage.removeItem('currentUser')
    acc.innerHTML =
        `
    <p onclick="openModal('log-in'), closeModal('acc')">ВХОД</p>
    <p onclick="openModal('reg'), closeModal('acc')">РЕГИСТРАЦИЯ</p>
    `
}

// Модальные окна

if (sessionStorage.getItem('currentUser')) {
    console.log(JSON.parse(sessionStorage.getItem('currentUser')));

    acc.innerHTML = `<p>${JSON.parse(sessionStorage.getItem('currentUser')).email}</p>
    <p onclick="logOut()">ВЫХОД</p>`
}

const openModal = (what) => {
    const target = document.querySelector(`.${what}`);
    console.log(target);

    target.style.display = "flex";
    bg.style.display = "flex";
    bg.addEventListener("click", (e) => {
        if (e.target == bg) {
            target.style.display = "none";
            bg.style.display = "none";
        }
    });
};

const closeModal = (what) => {
    const target = document.querySelector(`.${what}`);
    target.style.display = "none";
};

