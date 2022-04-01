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

const header = gsap.timeline();

if(window.matchMedia("(min-width: 992px)").matches) {
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
      ".employee-img",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: 1.5 },
      "second"
    )
    .fromTo(
      ".title",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: 1.5 },
      "second"
    )
    .fromTo(
      ".rect",
      { y: 1000, display: "none" },
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
}