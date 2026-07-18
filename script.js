// Hero smooth entrance

window.addEventListener("load", () => {


    const hero = document.querySelector(".hero-content");


    hero.style.opacity = "0";

    hero.style.transform = "translateY(40px)";



    setTimeout(()=>{


        hero.style.transition = "1.2s ease";


        hero.style.opacity = "1";


        hero.style.transform = "translateY(0)";



    },300);



});







// Desktop horizontal scroll


const carousel = document.querySelector(".carousel");



if(carousel){


    carousel.addEventListener("wheel",(e)=>{


        if(window.innerWidth > 700){


            e.preventDefault();


            carousel.scrollLeft += e.deltaY;



        }



    });



}







// Project card reveal animation


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


    card.style.transform="translateY(50px)";


    card.style.transition="all .8s ease";



    observer.observe(card);



});
