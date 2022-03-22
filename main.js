gsap.registerPlugin(ScrollTrigger);

// Kalo cuman sekali ajah ngasihnya
// gsap.from(".transisiChoose", {
//   scrollTrigger: {
//     start: "top 20%",
//     end: "bottom bottom",
//     trigger: ".transisiChoose",
//     scrub: 1,
//     toggleActions: "restart none none none",
//     markers: true,
//     onEnter() {
//       document.querySelector(".transisiChoose").classList.add("geserTransisi");
//     },
//     onLeave() {
//       document.querySelector(".transisiChoose").classList.add("geserTransisi");
//     },
//   },
// });

// Kalo misal bulak balik
// gsap.to(".transisiChoose", 1, {
//   zIndex: -1,
//   delay: 4,
//   scrollTrigger: {
//     start: "top 20%",
//     end: false,
//     trigger: ".transisiChoose",
//     scrub: 1,
//     toggleActions: "restart none none none",
//     markers: true,
//     toggleClass: "geserTransisi",
//   },
// });

// Kalo misal bulak balik
// gsap.from(".body-choose", 1, {
//   x: 200,
//   scrollTrigger: {
//     start: "top 20%",
//     end: false,
//     trigger: ".contentChoose",
//     scrub: 1,
//     toggleActions: "restart none none none",
//     markers: true,
//   },
// });

// gsap.from(".body-choose", 1, {
//   x: 200,
//   scrollTrigger: {
//     start: "top 20%",
//     end: false,
//     trigger: ".contentChoose",
//     toggleActions: "restart none none none",
//     markers: true,
//     // toggleClass: "geserContent",
//   },
// });
//Kalo misal bulak balik
// gsap.from(".transisiChoose", {
//   scrollTrigger: {
//     start: "top 20%",
//     end: false,
//     trigger: ".transisiChoose",
//     scrub: 1,
//     toggleActions: "restart none none none",
//     markers: true,
//     toggleClass: "geserTransisi",
//   },
// });

//Sedikit revisi
// const tlTransisiChose = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".transisiChoose",
//     start: "top 20%",
//     end: false,
//     toggleActions: "restart none none none",
//     markers: true,
//     scrub: 1,
//     toggleClass: "geserTransisi",
//   },
// });
// tlTransisiChose.to(".transisiChoose", { duration: 1, zIndex: -1 });

// const tlTransisiChose = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".contentChoose",
//     start: "top 20%",
//     end: "top 0",
//     toggleActions: "restart none none none",
//     markers: true,
//     scrub: 1,
//     markers: true,
//   },
// });

// tlTransisiChose.to(".transisiChoose", { duration: 2, opacity: 0, x: -200, zIndex: 5 }).from(".contentChoose .body-choose", { duration: 3, x: 400 }).to(".transisiChoose", { duration: 1, opacity: 0, x: -200, zIndex: -999 });

const headerChoose = document.querySelector(".header-choose");
const bodyChoose = document.querySelector(".body-choose");
const imageFormPoint = document.querySelector(".imageforForm");
const imageForm = document.querySelector(".image-form");
const cardFormPoint = document.querySelector(".cardforForm");
const cardForm = document.querySelector(".card-form");

const animateOnScroll = (elementAnimate, animateIn, animateOut, marginView) => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("masuk nih");
          elementAnimate.style.transform = `${animateIn}`;
        } else {
          console.log("yah keluar");
          elementAnimate.style.transform = `${animateOut}`;
        }
      });
    },
    {
      root: document,
      rootMarginTop: `${marginView}`,
    }
  );
};

const observer1 = animateOnScroll(headerChoose, "translateX(0%)", "translateX(50%)", "-100px");
const observer2 = animateOnScroll(bodyChoose, "translateX(0%)", "translateX(50%)", "-300px");
const observer3 = animateOnScroll(imageForm, "translateY(0%)", "translateY(100%)", "-200px");
const observer4 = animateOnScroll(cardForm, "translateX(0%)", "translateX(100%)", "-200px");

observer1.observe(headerChoose);
observer2.observe(bodyChoose);
observer3.observe(imageFormPoint);
observer4.observe(cardFormPoint);
