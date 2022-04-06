const tl3 = gsap.timeline();
tl3
//   .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
//   .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
//   .fromTo("#slider1", { x: 1300 }, { x: 0 });

        .from("#anim1", {opacity: 0, duration:1.2, y:250, ease: 'Power2.out', "z-index":"2"})
        .from(".anim2", {opacity: 0, duration: 0.5, y: -5, ease: 'power2.easeIn', })
        .from(".anim3", {opacity: 0, duration:0.4, y: 30, ease: 'power2.easeIn', })

ScrollTrigger.create({
  animation: tl3,
  trigger: "#section3-4",
  start: "-6% center",
  end: "90% center",
  // toggleActions: "restart none reverse none",
  // scrub: 1,
  // markers: true,
}); 


const tl4 = gsap.timeline();
tl4
  .from(".anim5", {opacity:0, duration:1.2, y:250, ease: 'power2.out'})


ScrollTrigger.create({
  animation: tl4,
  trigger: "#section4",
  start:"-6% center",
  end: "90% center",
});