document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU (HAMBURGER)
    ========================== */

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        // opcjonalnie: zamykanie menu po kliknięciu linku (mobile UX)
        document.querySelectorAll("#menu a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });
        });
    }


    /* =========================
       COUNTERS ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.dataset.target;
            const current = +counter.innerText;
            const increment = target / 150;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }

        };

        updateCounter();
    });

});