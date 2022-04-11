if(window.matchMedia("(min-width: 992px)").matches) {

  const tl3 = gsap.timeline();
  tl3
  //   .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
  //   .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
  //   .fromTo("#slider1", { x: 1300 }, { x: 0 });
  
          .fromTo("#anim1", {opacity: 0}, {opacity: 1, letterSpacing: 0, duration: 1, ease: 'Power2.out'})
          .fromTo("#anim1", {y: 350}, {y: 0, duration: 1})
          .from(".anim2", {opacity: 0, duration: 0.5, y: -5, ease: 'power2.easeIn', })
          .from(".anim3", {opacity: 0, duration:0.4, y: 30, ease: 'power2.easeIn', })
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
    .fromTo(".anim5 .judul", {opacity: 0}, {opacity: 1, letterSpacing: 0, duration: 1})
    .fromTo(".anim5", {y: 300}, {y: 0, duration: 1})
    .fromTo(".anim6", {opacity:0, x:-50}, {opacity: 1, x: 0, duration: 1, ease: 'Power3.easeOut'} )
  
  
  ScrollTrigger.create({
    animation: tl4,
    trigger: "#section4",
    start:"0% 10%",
    end: "90% center",
    toggleActions: "play none none none",
  
  });
  }