let pages = ["page1","page2"];
let doc = document.querySelector("h1")
cluster=``;
for (let page in pages){
    cluster +=  `${pages[page]}`+" ";
}
doc.innerText=cluster;


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
    opacity:0
})