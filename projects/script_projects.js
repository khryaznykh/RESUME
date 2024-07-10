const background = document.querySelectorAll (".background");
const button = document. querySelector ("button");
const body = document.querySelector (".body");
const backgroundContainer = document.querySelector (".absolute");
const projects = document.querySelectorAll (".invis");
const falling = document.querySelector('.background-container');
// const main = document.querySelector("#main");

const btn = document.querySelector (".btn");
const menuHidden = document.querySelectorAll (".hidden");
    
btn.addEventListener ('click', ()=>{
        btn.style.display = "none";
        menuHidden.forEach (item => {
            item.classList.remove ("hidden");
            item.classList.add ("menu-item");   
        });
        const menuItem = document.querySelectorAll (".menu-item");
        gsap.from (menuItem, {
            y: 650,
            stagger: 0.3,
            duration: 0.8,
            opacity:0,
            })
     
    })

button.addEventListener ('click', ()=>{
    body.style.display = "none",
    backgroundContainer.style.display = "block";
    
    gsap.to (background, {
        y: 700,
        duration: 2,
        stagger: 0.05,
        opacity: 0
    })
    setTimeout(()=> {
        falling.style.display = "none";
    }, 2000);
    gsap.to (projects, {
        delay: 2,
        opacity: 1,
        duration: 4,
        ease: "power4.in"
    })
   
    
})




// let i=0 
// setInterval (runningCube, 1000);
// function runningCube() {
// gsap.to (falling, {
//     y: 700,
//     delay: 1.5,
//     duration: 2,
//     opacity: 1 , 
//     stagger: 0.3
// })
// }
