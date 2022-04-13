$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 0) {
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
      } else if (scroll_top < 600) {
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

const loopImage = gsap.timeline({repeat: -1});
const header = gsap.timeline();

loopImage
  .fromTo(
    ".hr-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "first"
  )
  .fromTo(
    ".hr-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "first"
  )
  .fromTo(
    ".staff-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "second"
  )
  .fromTo(
    ".staff-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "second"
  )
  .to(
    ".hr-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "second"
  )
  .to(
    ".hr-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "second"
  )
  .fromTo(
    ".can-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "third"
  )
  .fromTo(
    ".can-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "third"
  )
  .to(
    ".staff-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "third"
  )
  .to(
    ".staff-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "third"
  )
  .to(
    ".can-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "fourth"
  )
  .to(
    ".can-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "fourth"
  );

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
    .fromTo("nav", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "third")
    .fromTo(".icon-scroll", {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, "third");
}

$(window).on("resize", resize);

resize();

function resize() {
  if($('body').width() >= 320 && $('body').width() < 576) {
    loopImage.play(true);
    $('.staff-text').css('display', 'none');
    $('.can-text').css('display', 'none');
    $('.rect').css('display', 'none');
    $('.employee-img').css('display', 'none');
    header.kill();
    $('#section3-4 .judul').css('letter-spacing', '0.05em');
  } else {
    loopImage.pause();
    $('.rect').css('display', 'block');
    $('#section3-4 .judul').css('letter-spacing', '0px');
    $('#section4 .judul').css('letter-spacing', '0px');
  }
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
  $("html, body").animate({ scrollTop: $('#section4').offset().top });
});