/*==================================================
PIXIMR V3
script.js
Part 1 / 3

Loader
Reveal Animation
Navbar
Smooth Scroll
==================================================*/


/*==================================================
LOADER
==================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.classList.add("loaded");

},600);

});



/*==================================================
REVEAL ANIMATION
==================================================*/

const revealItems=document.querySelectorAll(

".project-card,.signature-content,.contact-content,.section-heading"

);

const revealObserver=new IntersectionObserver(

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



/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});



/*==================================================
NAVBAR EFFECT
==================================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.style.background="rgba(8,8,13,.78)";

navbar.style.backdropFilter="blur(34px)";

navbar.style.borderBottom="1px solid rgba(255,255,255,.08)";

}else{

navbar.style.background="rgba(8,8,13,.45)";

navbar.style.backdropFilter="blur(28px)";

navbar.style.borderBottom="1px solid rgba(255,255,255,.05)";

}

});



/*==================================================
ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href==="#"+current){

link.classList.add("active");

}

});

});
/*==================================================
PART 2 / 3

Project Card Tilt
Horizontal Scroll
Ambient Lights
Hero Parallax
==================================================*/


/*==================================================
PROJECT CARD TILT
==================================================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);

const rotateX=-((y-rect.height/2)/18);

card.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";

});

});



/*==================================================
HORIZONTAL SCROLL
==================================================*/

const slider=document.querySelector(".project-slider");

if(slider){

slider.addEventListener("wheel",(e)=>{

if(window.innerWidth>900){

e.preventDefault();

slider.scrollLeft+=e.deltaY;

}

},{passive:false});

}



/*==================================================
AMBIENT LIGHT PARALLAX
==================================================*/

const ambient1=document.querySelector(".ambient-1");

const ambient2=document.querySelector(".ambient-2");

const ambient3=document.querySelector(".ambient-3");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

if(ambient1){

ambient1.style.transform=

`translate(${x*80}px,${y*45}px)`;

}

if(ambient2){

ambient2.style.transform=

`translate(${-x*70}px,${-y*40}px)`;

}

if(ambient3){

ambient3.style.transform=

`translate(${x*35}px,${-y*25}px)`;

}

});



/*==================================================
HERO PARALLAX
==================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

const offset=window.scrollY*0.35;

hero.style.backgroundPosition=

`center ${offset}px`;

}

});



/*==================================================
BUTTON HOVER GLOW
==================================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.contact-btn,.nav-book"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".35s";

});

});
/*==================================================
PART 3 / 3

Piximr AI
Performance
Final Polish
==================================================*/


/*==================================================
PIXIMR AI
==================================================*/

const aiBubble=document.querySelector(".piximr-ai-bubble");

const chatWindow=document.getElementById("piximr-chat");

const chatClose=document.getElementById("chat-close");

const chatMessages=document.getElementById("chat-messages");

const chatInput=document.getElementById("chat-input");

const chatSend=document.getElementById("chat-send");


if(aiBubble){

setTimeout(()=>{

aiBubble.style.display="flex";

},30000);

}


function addBotMessage(message){

const msg=document.createElement("div");

msg.className="bot-message";

msg.innerHTML=message;

chatMessages.appendChild(msg);

chatMessages.scrollTop=chatMessages.scrollHeight;

}


function openChat(){

chatWindow.style.display="block";

if(chatMessages.innerHTML===""){

setTimeout(()=>{

addBotMessage(

`👋 Hello, welcome to <b>Piximr</b>.<br><br>
I'm Piximr AI.<br>
How can I help you today?`

);

},300);

}

}


if(aiBubble){

aiBubble.addEventListener("click",openChat);

}


if(chatClose){

chatClose.addEventListener("click",()=>{

chatWindow.style.display="none";

});

}


function sendMessage(){

const text=chatInput.value.trim();

if(text==="") return;

const user=document.createElement("div");

user.className="user-message";

user.innerHTML=text;

chatMessages.appendChild(user);

chatInput.value="";

chatMessages.scrollTop=chatMessages.scrollHeight;


setTimeout(()=>{

addBotMessage(

"Thank you for reaching out to Piximr.Our AI assistant is currently being developed to serve you better<br>Meanwhile, Please Contact us via Whatsapp: +8801825558999."

);

},700);

}


if(chatSend){

chatSend.addEventListener("click",sendMessage);

}


if(chatInput){

chatInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});

}



/*==================================================
IMAGE LAZY LOADING
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.decoding="async";

});



/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});



/*==================================================
CONSOLE
==================================================*/

console.log(

"%cPIXIMR V3",

"color:#7b5cff;font-size:18px;font-weight:bold;"

);

console.log(

"Art • Design • Technology"

);
