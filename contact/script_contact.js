const btn = document.querySelector (".btn-menu");
const btnContainer = document.querySelector(".btn-container");
const menuHidden = document.querySelectorAll (".hidden");
    
btn.addEventListener ('click', ()=>{
        btnContainer.style.display = "none";
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

const btnContact = document.querySelector('.button-contact');
const formContact = document.querySelector('.display-form');
const cardContact = document.querySelector('.card');

btnContact.addEventListener('click', ()=>{
    cardContact.style.display='none';
    formContact.style.display='block'

})

