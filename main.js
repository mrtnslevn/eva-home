gsap.registerPlugin(ScrollTrigger);

const header = gsap.timeline();

header.fromTo('.transisi1 h1', {opacity: 0}, {opacity: 1, delay: 0.7}, 'first')
.fromTo('.transisi1 h1', {letterSpacing: 35}, {letterSpacing: 10})
.fromTo('.transisi1 h4', {opacity: 0}, {opacity: 1, delay: 0.7}, 'first')
.to('.transisi1', {autoAlpha: 0, delay: 1})
.fromTo('.section1', {display: 'none', opacity: 0}, {display: 'block', opacity: 1})
.fromTo('.desc h1', {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.2})
.fromTo('.desc p', {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.2})
.fromTo('.box img', {y: 100, display: 'none'}, {y: 0, display: 'block', duration: 1, delay: 0.2}, 'second')
.from('.circle-1', {x: -100, duration: 1, delay: 0.2}, 'second')
.from('.circle-2', {x: 200, duration: 1, delay: 0.2}, 'second')
.from('.circle-3', {y: 100, duration: 1, delay: 0.2}, 'second')
.fromTo('.hr', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1}, 'third')
.fromTo('.staff', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1}, 'four')
.fromTo('.can', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1}, 'fifth')
.fromTo('.desc a', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1}, 'sixth')
.fromTo('nav', {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, 'sixth');

// gsap.utils.toArray("section").forEach((section, i) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top", 
//         pin: true, 
//         pinSpacing: false 
//     });
// });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: '.section1',
//         // markers: true,
//         start: '10% 100%',
//         end: '100% 100%',
//         scrub: true
//     }
// }).fromTo('nav', {autoAlpha: 0}, {autoAlpha: 1})

// gsap.timeline({
//     scrollTrigger: {
//         trigger: '.desc',
//         // markers: true,
//         start: '0% 100%',
//         end: '100% 100%',
//         scrub: 4
//     }
// }).fromTo('.desc', {x: 500, opacity: 0}, {x: 0, opacity: 1}, 'first')
// .fromTo('.box img', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'second')
// .fromTo('.hr-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
// .fromTo('.hr', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
// .fromTo('.hr-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'third')
// .fromTo('.can-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
// .fromTo('.can', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
// .fromTo('.can-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
// .fromTo('.staff-box', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
// .fromTo('.staff', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four')
// .fromTo('.staff-text', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 'four');

var timedelay = 1;

function delayCheck() {
    if(timedelay == 30) {
        gsap.timeline().fromTo('.box-1', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
        .fromTo('.box-1', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-2', {y: 0}, {y: 180, ease: Linear.easeNone}, 'first')
        .fromTo('.box-2', {y: 180}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-3', {y: 0}, {y: 150, ease: Linear.easeNone}, 'first')
        .fromTo('.box-3', {y: 150}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-4', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
        .fromTo('.box-4', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-5', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
        .fromTo('.box-5', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-6', {y: 0}, {y: 180, ease: Linear.easeNone}, 'first')
        .fromTo('.box-6', {y: 180}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-7', {y: 0}, {y: 120, ease: Linear.easeNone}, 'first')
        .fromTo('.box-7', {y: 120}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
        .fromTo('.box-8', {y: 0}, {y: 180, ease: Linear.easeNone}, 'first')
        .fromTo('.box-8', {y: 180}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second');
        timedelay = 28;
    } 
    timedelay = timedelay+1;
}

$(window).mousemove(function() {
    timedelay = 1;
    clearInterval(_delay);
    _delay = setInterval(delayCheck, 1000);
});

_delay = setInterval(delayCheck, 1000);