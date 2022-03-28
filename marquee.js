// const tl3 = gsap.timeline();
// tl3
//   .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
//   .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
//   .fromTo("#slider1", { x: 1300 }, { x: 0 });

ScrollTrigger.create({
  animation: tl3,
  trigger: "#section3-4",
  start: "10% center",
  end: "10% center",
  // toggleActions: "restart none reverse none",
  scrub: 1,
  // markers: true,
});
