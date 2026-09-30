const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav");


menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});


const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


const form = document.getElementById("waitlistForm");

const formMessage = document.getElementById("formMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();


    if (nome === "" || email === "") {

        formMessage.textContent =
            "Preencha todos os campos.";

        return;

    }


    formMessage.textContent =
        `Obrigado, ${nome}! Você entrou na lista de espera.`;

    form.reset();

});



const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});