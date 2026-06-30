// ==============================
// Header Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#050b15";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "#08111f";
        header.style.boxShadow = "none";

    }

});


// ==============================
// Reveal Elements
// ==============================

const sections = document.querySelectorAll(".section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Back To Top Button
// ==============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.className = "top-btn";

document.body.appendChild(button);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        button.classList.add("visible");

    } else {

        button.classList.remove("visible");

    }

});

button.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
