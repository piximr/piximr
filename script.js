
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {

        hero.style.transition = "1.2s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 300);

});
