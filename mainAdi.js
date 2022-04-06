const scrollBar = document.querySelector(".choose .body-choose");
const cardChoose = document.querySelector(".choose .body-choose .card-choose:nth-child(3)");
// console.log(scrollBar);
const posisiCard = cardChoose.getBoundingClientRect();
const posisiRightCard = Math.floor(posisiCard.right);
// console.log(posisiCard);
let i = 1;

// scrollBar.addEventListener("scroll", function () {
//   const posisiY = window.scrollY;
//   const posisiRightUpdate = Math.floor(cardChoose.getBoundingClientRect().right);
//   // console.log(posisiRightUpdate);

//   window.scroll(0, posisiY + (posisiRightCard - 500 - posisiRightUpdate));
//   console.log(posisiY + (posisiRightCard - 500 - posisiRightUpdate));
//   // console.log(i++);
//   // console.log(posisiLeft.right);
//   // window.scrollTo(0, posisiY + i);
// });
// document.addEventListener("scroll", function () {
//   const posisiY = window.scrollY;
//   // console.log(posisiY);
//   // window.scrollTo(0);
// });

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
          // console.log("masuk nih");
          elementAnimate.style.transform = `${animateIn}`;
        } else {
          // console.log("yah keluar");
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
