gsap.registerPlugin(ScrollTrigger);

if(window.matchMedia("(min-width: 992px)").matches) {

  const tl3 = gsap.timeline();
  tl3
  //   .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
  //   .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
  //   .fromTo("#slider1", { x: 1300 }, { x: 0 });
  
          .fromTo("#anim1",  { opacity: 0, scale: 1.3, duration: 0.3 },  { opacity: 1, scale: 1, duration: 0.5 })
          .fromTo("#anim1", {y: 200}, {y: 0, duration: 0.6, ease: 'power2.inOut'})
          .from(".anim2", {autoAlpha: 0, duration: 0.5, y: -5 })
          .from(".anim3", {autoAlpha: 0, duration:0.4, y: 30 })
          .fromTo('.slider', {autoAlpha: 0}, {autoAlpha: 1});
  
  ScrollTrigger.create({
    animation: tl3,
    trigger: "#section3-4",
    start: "0% 10%",
    end: "90% center",
    toggleActions: "play none none none",
    // scrub: 1,
    // markers: true,
  }); 
  
  
  const tl4 = gsap.timeline();
  tl4
    .fromTo(".anim5 .judul", { opacity: 0, scale: 1.3, duration: 0.3 },  { opacity: 1, scale: 1, duration: 0.5 })
    .fromTo(".anim5", {y: 200}, {y: 0, duration: 0.6, })
    .fromTo(".anim6", {autoAlpha:0, x:-50}, {autoAlpha: 1, x: 0, duration: 1, ease: 'power3.inOut'} )
  
  
  ScrollTrigger.create({
    animation: tl4,
    trigger: "#section4",
    start:"0% 10%",
    end: "90% center",
    toggleActions: "play none none none",
  
  });
  }