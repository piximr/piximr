
// Hero entrance animation

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




// Horizontal portfolio wheel scroll

const carousel = document.querySelector(".carousel");


if(carousel){

    carousel.addEventListener("wheel", (event)=>{

        event.preventDefault();

        carousel.scrollLeft += event.deltaY;

    });

}
