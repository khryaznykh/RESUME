const btn = document.querySelector (".btn-container");
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


gsap.registerPlugin(TextPlugin);

const typing = document.querySelector (".text-type");
const wordsfortyping = ["Developer", "Coffeholic", "Designer", "Traveler", "Problem solver", "Team player"]
let i=0;
setInterval (type, 1500);
function type() {
if (i < (wordsfortyping.length)) {
    console.log (i);
    gsap.to (typing, {
        text: wordsfortyping[i],
        duration: 1,
        ease: "power1.in",
        yoyo: true
    })
    i++;
}
else i=0;
}

const description = document.querySelectorAll ("p");
gsap.from (description, {
    opacity:0,
    stagger: 0.5,
    duration: 1.5
})

const picture = document.querySelector (".picture");
const button = document.querySelector (".btn2");

gsap.from (picture, {
    y: -200,
    x: -300,
    ease: "power4.out",
    duration: 2,
    delay: 1,
    opacity: 0
});

gsap.from (button, {
    y: -200,
    x: -300,
    ease: "power4.out",
    duration: 2,
    opacity: 0
})