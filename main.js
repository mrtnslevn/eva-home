if (window.matchMedia("(max-width: 992px)").matches) {
  $('#nav li.dropdown>a').attr('data-bs-toggle','dropdown');
}

$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 150) {
      $("#nav .container-lg").addClass("scrolltop");
    } else {
      $("#nav .container-lg").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector("#nav .navbar");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector("#nav .navbar").offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

document.querySelector('#nav .first-button').addEventListener('click', function () {

  document.querySelector('#nav .animated-icon1').classList.toggle('open');
});

if (
  screen.width <= 575 &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) === true
) {
  window.location.reload();
  document.location = "/m";
}
$(window).resize(function () {
  if (
    screen.width <= 575 &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) === true
  ) {
    window.location.reload();
    document.location = "/m";
  }
});

const header = gsap.timeline();

if(window.matchMedia("(min-width: 992px)").matches) {
  header
    .fromTo(
      ".desc h1",
      { x: -500, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, delay: 0.2 },
      "first"
    )
    .fromTo(
      ".desc p",
      { x: -500, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, delay: 0.2 },
      "first"
    )
    .fromTo(
      ".employee-img",
      { display: "none", autoAlpha: 0 },
      { display: "block", autoAlpha: 1, duration: 0.6 },
      "second"
    )
    .fromTo(
      ".title",
      { display: "none", autoAlpha: 0 },
      { display: "block", autoAlpha: 1, duration: 0.6 },
      "second"
    )
    .fromTo(
      ".rect",
      { y: 1000, display: "none" },
      { y: 0, display: "block", duration: 0.6, delay: 0.1 },
      "third"
    )
    .fromTo(
      ".desc .btn .solusiButton",
      { display: "none", autoAlpha: 0 },
      { display: "block", autoAlpha: 1, duration: 0.6, delay: 0.1 },
      "third"
    )
    .fromTo("nav", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, delay: 0.1 }, "third")
    .fromTo(".icon-scroll", {autoAlpha: 0}, {autoAlpha: 1, duration: 0.6, delay: 0.1}, "third");
}

$('.scroll-down-icon').click(function() {
  $('html, body').animate({ scrollTop: $('#section3-4').offset().top});
})

$('.section1 .desc .btn').click(function() {
  $('html, body').animate({ scrollTop: $('.formSection').offset().top})
})

$('#section3-4 .anim3 .btn').click(function() {
  $('html, body').animate({ scrollTop: $('.formSection').offset().top})
})

$('.back-button button').click(function () {
  $("html, body").animate({ scrollTop: $('#section4').offset().top - 80});
});