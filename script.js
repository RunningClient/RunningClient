window.onload = function () {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
    }
};
// =======================================
// Running Client Ultimate Script
// =======================================

"use strict";

console.clear();

console.log("🚀 Running Client Ultimate Loaded");

// ===========================
// Loader
// ===========================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition=".6s";

}

},1200);

});

// ===========================
// Mobile Menu
// ===========================

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

if(menuBtn){

menuBtn.onclick=()=>{

navLinks.classList.toggle("show");

};

}

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

};

});// ===========================
// Navbar Effect
// ===========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(5,10,20,.95)";

navbar.style.boxShadow="0 5px 25px rgba(0,191,255,.35)";

}else{

navbar.style.background="rgba(5,10,20,.65)";

navbar.style.boxShadow="none";

}

});

// ===========================
// Scroll Progress
// ===========================

const progress=document.createElement("div");

progress.className="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.cssText=`
position:fixed;
top:0;
left:0;
height:4px;
background:#00bfff;
width:${percent}%;
z-index:99999;
`;

});// ===========================
// Back To Top
// ===========================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Theme Toggle
// ===========================

const themeBtn=document.querySelector(".theme-toggle");

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

};// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements=document.querySelectorAll(

".feature-card,.gallery-card,.news-card,.team-card,.timeline-card,.download-card,.requirement-card,.achievement-card,.faq-item,.contact-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealElements.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});
// ===========================
// Counter Animation
// ===========================

const counters=document.querySelectorAll(

".stat h3,.stat-box h2"

);

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

if(isNaN(number)) return;

let value=0;

const speed=Math.max(10,2000/number);

const timer=setInterval(()=>{

value++;

counter.innerText=text.replace(number,value);

if(value>=number){

clearInterval(timer);

counter.innerText=text;

}

},speed);

});// ===========================
// Mouse Glow
// ===========================

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",e=>{

if(!glow) return;

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ===========================
// Floating Particles
// ===========================

for(let i=0;i<40;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

(5+Math.random()*8)+"s";

particle.style.animationDelay=

Math.random()*5+"s";

document.body.appendChild(particle);

}// ===========================
// Toast Notification
// ===========================

const toast=document.querySelector(".toast");

if(toast){

setTimeout(()=>{

toast.style.opacity="1";

toast.style.transform="translateY(0)";

},1000);

setTimeout(()=>{

toast.style.opacity="0";

toast.style.transform="translateY(30px)";

},5000);

}// ===========================
// Active Navbar
// ===========================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});// ===========================
// Keyboard Shortcuts
// ===========================

document.addEventListener("keydown",e=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

if(e.key==="End"){

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

});

// ===========================
// Welcome Message
// ===========================

console.log("✅ Running Client Ultimate Ready!");// ===========================
// Theme Save
// ===========================

const themeButton=document.querySelector(".theme-toggle");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

}

if(themeButton){

themeButton.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

}else{

localStorage.setItem("theme","dark");

}

};

}// ===========================
// Search
// ===========================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(

"section h2,.feature-card,.news-card,.gallery-card,.faq-item"

).forEach(item=>{

if(item.innerText.toLowerCase().includes(value)){

item.style.display="";

}else{

item.style.display="none";

}

});

});

}// ===========================
// Discord Button Animation
// ===========================

const discord=document.querySelector(".discord-float");

if(discord){

setInterval(()=>{

discord.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},3000);

}

// ===========================
// Performance Log
// ===========================

window.addEventListener("load",()=>{

console.log(

"⚡ Website Loaded Successfully"

);

});// ===========================
// Newsletter
// ===========================

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",e=>{

e.preventDefault();

alert("✅ Thank you for subscribing!");

newsletter.reset();

});

}// ===========================
// Gallery Auto Highlight
// ===========================

const galleryCards=document.querySelectorAll(".gallery-card");

let galleryIndex=0;

if(galleryCards.length){

setInterval(()=>{

galleryCards.forEach(card=>{

card.classList.remove("active");

});

galleryCards[galleryIndex].classList.add("active");

galleryIndex++;

if(galleryIndex>=galleryCards.length){

galleryIndex=0;

}

},2500);

}// ===========================
// Ripple Effect
// ===========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",e=>{

const ripple=document.createElement("span");

const size=Math.max(

button.clientWidth,

button.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.offsetX-size/2+"px";

ripple.style.top=

e.offsetY-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ===========================
// Debug
// ===========================

console.log("🚀 Script Part 15 Loaded");
// ===========================
// Aurora Movement
// ===========================

const aurora=document.querySelector(".aurora");

document.addEventListener("mousemove",e=>{

if(!aurora) return;

const x=e.clientX/50;

const y=e.clientY/50;

aurora.style.transform=
`translate(${x}px,${y}px)`;

});


// ===========================
// Particle Animation
// ===========================

const particles=document.querySelectorAll(".particle");

particles.forEach(p=>{

p.style.position="fixed";

p.style.bottom="-20px";

p.style.width="5px";

p.style.height="5px";

p.style.background="#00bfff";

p.style.borderRadius="50%";

p.style.opacity=".5";

p.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-110vh)"

}

],{

duration:(5000+Math.random()*5000),

iterations:Infinity

});

});// ===========================
// Mobile Menu Close
// ===========================

document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("click",()=>{

if(navLinks){

navLinks.classList.remove("show");

}

});

});


// ===========================
// Image Lazy Loading
// ===========================

document.querySelectorAll("img")

.forEach(img=>{

img.loading="lazy";

});// ===========================
// Error Protection
// ===========================

window.addEventListener("error",e=>{

console.log(

"Handled Error:",

e.message

);

});


// ===========================
// Online Status
// ===========================

window.addEventListener("online",()=>{

console.log("🟢 Internet Connected");

});


window.addEventListener("offline",()=>{

console.log("🔴 Internet Disconnected");

});
// ===========================
// Button Hover Sound Ready
// ===========================

document.querySelectorAll("button,.btn")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.cursor="pointer";

});

});// ==================================
// Final Initialization
// ==================================

(function(){

console.log(
"⚡ Running Client Ultimate Edition Started"
);


// Current Year

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=

`© ${new Date().getFullYear()} Running Client. All Rights Reserved.`;

}


// Prevent Empty Links

document.querySelectorAll('a[href="#"]')

.forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

});

});


// Ready Message

setTimeout(()=>{

console.log(

"✅ All Systems Ready"

);

},1000);


})();
