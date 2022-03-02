gsap.registerPlugin(ScrollTrigger);

const header = gsap.timeline();

header.fromTo('.transisi1 h1', {opacity: 0, duration: 10}, {opacity: 1})
.fromTo('.transisi1 h1', {letterSpacing: 35, duration: 8}, {letterSpacing: 10})
.fromTo('.transisi1 h5', {opacity: 0, duration: 5}, {opacity: 1})
.fromTo('.scroll-down', {opacity: 0, duration: 3}, {opacity: 1});

gsap.utils.toArray("section").forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
    });
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.section1',
        // markers: true,
        start: '30% 100%',
        end: '100% 100%',
        scrub: 4
    }
}).fromTo('.desc', {x: 500, opacity: 0}, {x: 0, opacity: 1}, 'first')
.fromTo('.box img', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'second')
.fromTo('.hr-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
.fromTo('.hr', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
.fromTo('.hr-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
.fromTo('.can-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
.fromTo('.can', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
.fromTo('.can-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
.fromTo('.staff-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
.fromTo('.staff', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
.fromTo('.staff-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four');