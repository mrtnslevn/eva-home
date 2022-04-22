gsap.registerPlugin(ScrollTrigger);

if(window.matchMedia("(min-width: 992px)").matches) {

  const tl3 = gsap.timeline();
  tl3
  //   .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
  //   .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
  //   .fromTo("#slider1", { x: 1300 }, { x: 0 });
  
          .fromTo("#anim1", {autoAlpha: 0, letterSpacing: 5}, {autoAlpha: 1, letterSpacing: 0, duration: 0.7, ease: 'power3.inOut'})
          .fromTo("#anim1", {y: 350}, {y: 0, ease: 'power2.inOut'})
          .from(".anim2", {autoAlpha: 0, y: -5 })
          .from(".anim3", {autoAlpha: 0, y: 30 })
          .fromTo('#section3-4 .slider', {autoAlpha: 0}, {autoAlpha: 1});
  
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
    .fromTo(".anim5 .judul", {autoAlpha: 0, letterSpacing: 5}, {autoAlpha: 1, letterSpacing: 0, duration: 0.7, ease: 'power3.inOut'})
    .fromTo(".anim5", {y: 300}, {y: 0, ease: 'power2.inOut'})
    .fromTo(".anim6", {autoAlpha:0, x:-50}, {autoAlpha: 1, x: 0, ease: 'power3.inOut'} )
  
  
  ScrollTrigger.create({
    animation: tl4,
    trigger: "#section4",
    start:"0% 10%",
    end: "90% center",
    toggleActions: "play none none none",
  
  });
  }