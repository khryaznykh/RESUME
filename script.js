gsap.registerPlugin(Flip);

let layouts = ["final", "plain", "grid", "columns" ],
		container = document.querySelector(".container"),
		curLayout = 0; // index of the current layout
        i = 0;

function nextState() {
    const state = Flip.getState(".letter, .for, .gsap", {props: "color,backgroundColor", simple: true}); // capture current state

    if (i < layouts.length) {
        container.classList.remove(layouts[curLayout]); // remove old class
        curLayout = (curLayout + 1) % layouts.length;   // increment (loop back to the start if at the end)
        i = i + 1;

    container.classList.add(layouts[curLayout]);    // add the new class

    Flip.from(state, { // animate from the previous state
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayout === 0, // only spin when going to the "final" layout
        simple: true,
        onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
        onLeave: elements => gsap.to(elements, {opacity: 0})
    });
    gsap.delayedCall(2, nextState)
    // gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
}
}


    gsap.delayedCall(1, nextState);

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


    
