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

gsap.from ("h1", {
    duration: 2,
    y: -100,
    opacity: 0,
    ease:"power4.out"
})

const cert = document.querySelectorAll(".card-p");
gsap.from (cert, {
    duration: 2,
    y:-100,
    opacity:0,
    stagger:0.3,
    ease:"power4.out"
})