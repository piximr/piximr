
// Hero entrance

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";


    setTimeout(() => {

        hero.style.transition = "1.2s ease";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";


    },300);


});





// Mouse wheel horizontal portfolio scroll

const carousel = document.querySelector(".carousel");


if(carousel){

    carousel.addEventListener("wheel", (e)=>{

        if(window.innerWidth > 700){

            e.preventDefault();

            carousel.scrollLeft += e.deltaY;

        }

    });

}





// Smooth card reveal on scroll

const cards = document.querySelectorAll(".project-card");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }


    });


},{threshold:.2});




cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.8s ease";


    observer.observe(card);


});
