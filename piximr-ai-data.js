// Piximr AI Engine v1

const orb = document.querySelector(".piximr-ai-bubble");
const chat = document.getElementById("piximr-chat");
const closeBtn = document.getElementById("chat-close");
const messages = document.getElementById("chat-messages");


let opened = false;


// Show AI orb after 10 seconds

setTimeout(() => {

    orb.style.display = "flex";

}, 10000);



// Open chat

function openChat(){

    chat.style.display = "block";

    if(!opened){

        opened = true;

        setTimeout(() => {

            typeMessage(getGreeting());

        },500);

    }

}



// Close chat

closeBtn.onclick = () => {

    chat.style.display = "none";

};



// Click orb

orb.onclick = () => {

    openChat();

};



// Auto open after 20 seconds

setTimeout(() => {

    openChat();

},20000);




// Typing effect

function typeMessage(text){

    let p = document.createElement("p");

    messages.appendChild(p);


    let i = 0;


    let typing = setInterval(()=>{

        p.innerHTML += text.charAt(i);

        i++;


        if(i >= text.length){

            clearInterval(typing);

        }


    },35);

}




// Time based greeting

function getGreeting(){

    let hour = new Date().getHours();

    let greeting;


    if(hour < 12){

        greeting = "Good morning";

    }
    else if(hour < 18){

        greeting = "Good afternoon";

    }
    else{

        greeting = "Good evening";

    }


    return `${greeting} Sir.<br>
    I'm Piximr AI. It's a pleasure to meet you.<br>
    I’d love to know what brings you to Piximr today.`;

}
