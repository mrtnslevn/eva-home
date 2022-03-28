$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 0) {
      $("#nav .container").addClass("scrolltop");
    } else {
      $("#nav .container").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  autohide = document.querySelector(".navbar");

  navbar_height = document.querySelector(".navbar").offsetHeight;

  if (autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        autohide.classList.remove("scrolled-down");
        autohide.classList.add("scrolled-up");
      } else if (scroll_top < 600) {
      } else {
        autohide.classList.remove("scrolled-up");
        autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

const header = gsap.timeline({});

header
  .fromTo(
    ".desc h1",
    { x: -500, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, delay: 0.2 },
    "first"
  )
  .fromTo(
    ".desc p",
    { x: -500, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, delay: 0.2 },
    "first"
  )
  .fromTo(
    ".hr",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1, duration: 1.5 },
    "second"
  )
  .fromTo(
    ".staff",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1, duration: 1.5 },
    "second"
  )
  .fromTo(
    ".can",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1, duration: 1.5 },
    "second"
  )
  .fromTo(
    ".rect",
    { y: 100, display: "none" },
    { y: 0, display: "block", duration: 1 },
    "third"
  )
  .fromTo(
    ".desc a",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1, duration: 1 },
    "third"
  )
  .fromTo("nav", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "third");

var timedelay = 1;

function delayCheck() {
  if (timedelay == 30) {
    gsap
      .timeline()
      .fromTo(".box-1", { y: 0 }, { y: 100, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-1",
        { y: 100 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-2", { y: 0 }, { y: 80, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-2",
        { y: 80 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-3", { y: 0 }, { y: 150, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-3",
        { y: 150 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-4", { y: 0 }, { y: 100, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-4",
        { y: 100 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-5", { y: 0 }, { y: 100, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-5",
        { y: 100 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-6", { y: 0 }, { y: 180, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-6",
        { y: 180 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      )
      .fromTo(".box-7", { y: 0 }, { y: 120, ease: Linear.easeNone }, "first")
      .fromTo(
        ".box-7",
        { y: 120 },
        { y: 0, ease: Linear.easeNone, delay: 0.2 },
        "second"
      );
    timedelay = 28;
  }
  timedelay = timedelay + 1;
}

$(window).mousemove(function () {
  timedelay = 1;
  clearInterval(_delay);
  _delay = setInterval(delayCheck, 1000);
});

_delay = setInterval(delayCheck, 1000);

const tl3 = gsap.timeline();
tl3
  .fromTo(".transisi4-title", { height: 80 }, { height: 0 })
  .fromTo(".transisi4-desc", { height: 40 }, { height: 0 })
  .fromTo("#slider1", { x: 1300 }, { x: 0 });

ScrollTrigger.create({
  animation: tl3,
  trigger: "#section3-4",
  start: "10% center",
  end: "10% center",
  toggleActions: "restart none reverse none",
  scrub: 1,
  // markers: true
});
