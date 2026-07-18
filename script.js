/*==================================================
PIXIMR V2
script.js
==================================================*/



/*==========================
LOADER
==========================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/*==========================
REVEAL ON SCROLL
==========================*/

const revealItems = document.querySelectorAll(

".project-card, .signature-content, .contact-content"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.classList.add("reveal");

revealObserver.observe(item);

});



/*==========================
HORIZONTAL SCROLL
Desktop only
==========================*/

const slider = document.querySelector(".project-slider");

if(slider){

slider.addEventListener("wheel",(e)=>{

if(window.innerWidth>900){

e.preventDefault();

slider.scrollLeft += e.deltaY;

}

},{passive:false});

}



/*==========================
PARALLAX AMBIENT LIGHT
==========================*/

const ambient1 = document.querySelector(".ambient-1");
const ambient2 = document.querySelector(".ambient-2");

document.addEventListener("mousemove",(e)=>{

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

ambient1.style.transform =
`translate(${x*70}px,${y*40}px)`;

ambient2.style.transform =
`translate(${-x*60}px,${-y*35}px)`;

});



/*==========================
GLASS CARD TILT
==========================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rx = -(y-rect.height/2)/18;
const ry = (x-rect.width/2)/18;

card.style.transform =
`perspective(1200px)
rotateX(${rx}deg)
rotateY(${ry}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});



/*==========================
SMOOTH NAVBAR
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target = document.querySelector(

link.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
