// Cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.pageX+"px";
  cursor.style.top=e.pageY+"px";
});

// Efeito digitação
const text="Gustavo Prates da Silva";
let index=0;
const speed=80;
function typeWriter(){
  if(index<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(index);
    index++;
    setTimeout(typeWriter,speed);
  }
}
window.onload=typeWriter;

// PARALLAX HERO IMAGE
const heroImg = document.getElementById('hero-img');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth/2 - e.clientX) / 40;
  const y = (window.innerHeight/2 - e.clientY) / 40;
  heroImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(0)`;
});