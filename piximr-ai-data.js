// Piximr AI Concierge v2

const orb = document.querySelector(".piximr-ai-bubble");
const chat = document.getElementById("piximr-chat");
const closeBtn = document.getElementById("chat-close");
const messages = document.getElementById("chat-messages");
const input = document.getElementById("chat-input");
const sendBtn = document.getElementById("chat-send");

let userReplied = false;
let chatOpened = false;
let minimizeTimer;


// Show orb after 10 seconds

setTimeout(() => {

    orb.style.display = "flex";

},10000);


// Open chat

function openChat(){

    chat.style.display = "block";

    if(!chatOpened){

        chatOpened = true;

        setTimeout(()=>{

            typeMessage(getGreeting());

            startNoReplyTimer();

        },500);

    }

}


// Orb click

orb.onclick = () => {

    openChat();

};


// Close

closeBtn.onclick = () => {

    chat.style.display = "none";

};


// Auto open after 20 seconds

setTimeout(()=>{

    openChat();

},20000);



// No reply timer

function startNoReplyTimer(){

    minimizeTimer = setTimeout(()=>{

        if(!userReplied){

            chat.style.display="none";

            setTimeout(()=>{

                if(!userReplied){

                    openChat();

                    typeMessage(
                    "I hope you are enjoying exploring Piximr. If you have a creative idea, I would love to help you bring it to life."
                    );

                }

            },30000);

        }


    },15000);

}



// Typing animation

function typeMessage(text){

    let message = document.createElement("p");

    messages.appendChild(message);


    let i=0;


    let typing=setInterval(()=>{

        message.innerHTML += text.charAt(i);

        i++;


        if(i>=text.length){

            clearInterval(typing);

        }


    },35);

}



// Send message

sendBtn.onclick = sendMessage;


input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});



function sendMessage(){

    let text=input.value.trim();

    if(text==="") return;


    userReplied=true;

    clearTimeout(minimizeTimer);


    addUserMessage(text);

    input.value="";


    setTimeout(()=>{

        typeMessage(getReply(text.toLowerCase()));

    },600);

}



// User message

function addUserMessage(text){

    let p=document.createElement("p");

    p.innerHTML="You: "+text;

    messages.appendChild(p);

}



// AI reply system

function getReply(text){


    if(
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("charge")
    ){

        return "Every project has unique creative requirements. I would love to connect you with our artist so we can understand your vision and suggest the best approach.";

    }


    if(
    text.includes("3d") ||
    text.includes("render") ||
    text.includes("visual")
    ){

        return "Great. Piximr specializes in creating visual experiences that help ideas become reality. May I know what type of project you are working on?";

    }


    if(
    text.includes("animation") ||
    text.includes("video")
    ){

        return "We create cinematic animations that help communicate stories and ideas. I would love to know more about your vision.";

    }


    if(
    text.includes("hello") ||
    text.includes("hi")
    ){

        return "It's nice to connect with you. How can Piximr help bring your creative idea to life?";

    }


    if(
    text.includes("looking") ||
    text.includes("just browsing")
    ){

        return "Of course. Feel free to explore our work. If something inspires you, I will be happy to help you connect with our artist.";

    }


    return "That sounds interesting. Could you share a little more about your project so I can guide you better?";

}



// Greeting

function getGreeting(){

    let hour=new Date().getHours();

    let time="Good evening";

    if(hour<12){

        time="Good morning";

    }
    else if(hour<18){

        time="Good afternoon";

    }


    return `${time} Sir.<br>
    I'm Piximr AI. It's a pleasure to meet you.<br>
    I’d love to know what brings you to Piximr today.`;

}
