let pages = ["page1","page2","page3"];
let doc = document.querySelector("main")
let pag = document.getElementById("page1")

for (let page in pages){
    doc.innerHTML += `<div style="display:flex;justify-content:center;align-items:center;" id=${pages[page]}>
    <div id=box></div>
    </div>`;
}


let tl = gsap.timeline()
gsap.from("nav",{
     y:-30,
     duration:1,
     opacity:0,
     stagger:0.1
})
tl.from("h4",{
     y:-30,
     duration:1,
     opacity:0,
     stagger:0.1
})
tl.from("h1",{
    y:-30,
    duration:2,
    opacity:0})

gsap.from("#page1 #box",{
           scale:0,
           duration:2,
           delay:2,
           rotate:360
})

gsap.from("#page2 #box",{
           scale:0,
           duration:2,
           rotate:360,
           scrollTrigger:{
               trigger:"#page2 #box",
               scroller:"body",
               markers:true,
               start:"top 60%",
               end:"top 30%",
               scrub:2,
               pin:true
           }
})