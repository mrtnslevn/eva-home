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

if (screen.width > 575) {
  window.location.reload();
  document.location = "/"; // langsung index.html
}
$(window).resize(function () {
  if (screen.width > 575) {
    window.location.reload();
    document.location = "/"; // langsung index.html
  }
});

const loopImage = gsap.timeline({repeat: -1});

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