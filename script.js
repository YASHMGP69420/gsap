// gsap.to("#box",{
//     x:500,
//     duration:2,
//     delay:2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })
// gsap.from("#box2",{
//     x:600,
//     y:600,
//     duration:3,
//     delay:1
// })

gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1,
    repeat:-1,
    yoyo:true
})