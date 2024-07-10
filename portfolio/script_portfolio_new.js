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
        
            duration: 1,
            stagger: 0.05,
            opacity: 0
        })
        
        // const backdrop = setTimeout(()=> {
        //     falling.style.display = "none";
        // }, 2000);
        // clearTimeout(backdrop);
        gsap.to (projects, {
            delay: 1.5,
            opacity: 1,
            duration: 2,
            ease: "power4.in"
        })
       
      
    })

//    const image = document.querySelectorAll(".image");
//    const text = document.querySelectorAll('.text');

//    text.forEach(textAppearRotate);
    
//     function textAppearRotate (item) {
//         item.addEventListener('mouseover', ()=>{
//          item.classList.add("text_big")
        
//     })
//     item.addEventListener('mouseleave', ()=> {
//         item.classList.remove("text_big")
//     })
   
//    }



// const images = document.querySelectorAll (".item");


// images.forEach((item) => {
//     item.addEventListener('mouseover', ()=>{
//         deleteClass();
//         item.classList.add('hover');
     
//     })
//     function deleteClass() {
//         images.forEach((item)=>{
//             item.classList.remove('hover')
//         })
//     }
// })