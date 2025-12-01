const toggle = document.getElementById("dn");

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark", this.checked);
    localStorage.setItem("darkMode", this.checked ? "on" : "off");
});

window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "on") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }
});

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    menu.classList.toggle("open");
});

// MULTI-LANG
const langTH = {
    home: "หน้าแรก",
    app: "แอพพรีเมียม",
    topup: "เติมเงิน",
    contact: "ติดต่อ",
    login: "เข้าสู่ระบบ",
};

const langEN = {
    home: "Home",
    app: "Premium Apps",
    topup: "Top Up",
    contact: "Contact",
    login: "Login",
};

const textMap = {
    home: document.querySelector(".nav-home"),
    app: document.querySelector(".nav-app"),
    topup: document.querySelector(".nav-topup"),
    contact: document.querySelector(".nav-contact"),
    login: document.querySelector(".login-btn"),
};

function setLanguage(lang) {
    const dict = lang === "th" ? langTH : langEN;

    Object.keys(textMap).forEach(key => {
        if (textMap[key]) textMap[key].textContent = dict[key];
    });

    localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);

        document.querySelectorAll(".lang").forEach(el => el.classList.remove("active"));
        btn.classList.add("active");
    });
});

const savedLang = localStorage.getItem("lang") || "th";
setLanguage(savedLang);
document.querySelector(`.lang[data-lang="${savedLang}"]`).classList.add("active");