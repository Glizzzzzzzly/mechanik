const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("ul");

hamburger.onclick = () => {

    menu.classList.toggle("active");

};

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 150;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update,10);

        }else{

            counter.innerText = target;

        }

    };

    update();

});