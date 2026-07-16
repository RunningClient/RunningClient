// =====================================
// Running Client Website v3
// =====================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Navbar Effect

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.style.background="rgba(5,10,20,.95)";
navbar.style.boxShadow="0 5px 25px rgba(0,191,255,.35)";

}else{

navbar.style.background="rgba(10,15,25,.70)";
navbar.style.boxShadow="none";

}

});

// Scroll Reveal

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(".card,.stat,.faq-item,.shot,.download").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});

// Mouse Glow

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// Progress Bar

const progress=document.createElement("div");

progress.className="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const percent=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;

progress.style.width=percent+"%";

});

// Floating Particles

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(5+Math.random()*10)+"s";

p.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(p);

}

// Stats Counter

const stats=document.querySelectorAll(".stat h2");

stats.forEach(stat=>{

const finalValue=stat.innerText;

if(finalValue.includes("K")){

let n=0;

const end=parseInt(finalValue);

const timer=setInterval(()=>{

n++;

stat.innerText=n+"K+";

if(n>=end){

clearInterval(timer);

stat.innerText=finalValue;

}

},80);

}

});

// Download Button

const btn=document.querySelector(".download-btn");

if(btn){

btn.onclick=(e)=>{

e.preventDefault();

alert("Running Client Download Coming Soon 🚀");

};

}

console.log("Running Client Website Loaded Successfully");
