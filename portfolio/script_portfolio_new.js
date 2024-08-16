const background = document.querySelectorAll (".background");
const button = document. querySelector (".btn-clickhere");
const body = document.querySelector (".body");
const backgroundContainer = document.querySelector (".absolute");
const projects = document.querySelectorAll (".invis");
const falling = document.querySelector('.background-container');
// const main = document.querySelector("#main");

const btncontainer = document.querySelector (".btn-container");
const btn = document.querySelector (".btn");
const menuHidden = document.querySelectorAll (".hidden");
    
btn.addEventListener ('click', ()=>{
        btncontainer.style.display = "none";
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
            duration: 0.4,
            stagger: 0.01,
            opacity: 0
        })
        
        gsap.to (projects, {
            delay: 0.5,
            opacity: 1,
            duration: 0.7,
    
        })
       
      
    })
