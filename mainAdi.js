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

const observer3 = animateOnScroll(imageForm, "translateY(0%)", "translateY(100%)", "-200px");
const observer4 = animateOnScroll(cardForm, "translateX(0%)", "translateX(100%)", "-200px");

observer3.observe(imageFormPoint);
observer4.observe(cardFormPoint);

//Slider
const sliderItems = document.querySelectorAll(".slider-items");
const sliderItemsImg = document.querySelectorAll(".slider-items img");
const sliderItemsH3 = document.querySelectorAll(".slider-items h3");
const sliderItemsH3Loc = document.querySelector(".slider-items h3.loc");
const sliderItemsP = document.querySelectorAll(".slider-items p");
const sliderItemsPLoc = document.querySelector(".slider-items p.loc");

const buttonSliderNext = document.querySelector("button.slider-next");
const buttonSliderPrevious = document.querySelector("button.slider-previous");
const sliderIndicatorLoc = document.querySelector(".indicator-slider");

// Function for sliderIndicator
function printIndicator() {
  cards = "";
  sliderItems.forEach((el, i) => {
    if (el.classList.contains("active")) {
      cards += `<button class="mx-1 indicator-button opacity-null btn-warning" image="${sliderItemsImg[i].src}" indicator="${i}"></button>`;
    } else {
      cards += `<button class="mx-1 indicator-button btn-secondary" image="${sliderItemsImg[i].src}" indicator="${i}"></button>`;
    }
  });
  sliderIndicatorLoc.innerHTML = cards;
}

// Starting sliderIndicator Function
printIndicator();

// Function to Give Image animation Effect when the Slider is used
function animateSlider(nth1, nth2, nth3) {
  document.querySelector(".slider-items:nth-child(1)").classList.add(`animasi${nth1}`);
  document.querySelector(".slider-items:nth-child(2)").classList.add(`animasi${nth2}`);
  document.querySelector(".slider-items:nth-child(3)").classList.add(`animasi${nth3}`);
  setTimeout(function () {
    document.querySelector(".slider-items:nth-child(1)").classList.remove(`animasi${nth1}`);
    document.querySelector(".slider-items:nth-child(2)").classList.remove(`animasi${nth2}`);
    document.querySelector(".slider-items:nth-child(3)").classList.remove(`animasi${nth3}`);
  }, 500);
}

// Function to Give Content animation Effect when the Slider is used
function animateContent(params) {
  sliderItems.forEach((el) => {
    el.classList.remove("active");
  });

  sliderItems[params].classList.add("active");
  sliderItemsH3Loc.innerHTML = h3Image[params];
  sliderItemsPLoc.innerHTML = pImage[params];
}
// Function for update Array Content
function updateArray(params) {
  let arraySrcImg = [];
  let arrayActive = [];
  let arrayReActive = [];

  for (let i = 0; i < srcImage.length; i++) {
    if (i + params <= srcImage.length) {
      if (params + i == 0) {
        arrayActive.push(0);
      } else if (params + i == srcImage.length) {
        arrayReActive.push(i * 0);
      } else {
        arrayActive.push(i + params);
      }
    } else {
      arrayReActive.push(i * 0);
    }
  }

  for (let j = 0; j < arrayReActive.length; j++) {
    arrayReActive[j] = j;
  }

  const arrayMix = arrayActive.concat(arrayReActive);

  for (let k = 0; k < srcImage.length; k++) {
    sliderItemsImg[k].src = srcImage[arrayMix[k]];
    arraySrcImg[k] = srcImage[arrayMix[k]];
  }

  arrayIndeks.splice(0, 0);
  arrayIndeks = [...arrayMix];
}

// ---------------------------------------------------------------------------------------------------------------
// Get Content for img, h3, and p
// ---------------------------------------------------------------------------------------------------------------

let srcImage = [];
let h3Image = [];
let pImage = [];
for (let i = 0; i < sliderItems.length; i++) {
  srcImage.push(sliderItemsImg[i].src);
  h3Image.push(sliderItemsH3[i].textContent);
  pImage.push(sliderItemsP[i].textContent);
}

// ---------------------------------------------------------------------------------------------------------------
// Get Array Default
// ---------------------------------------------------------------------------------------------------------------

let arrayIndeks = [];
for (let i = 0; i < srcImage.length; i++) {
  if (i == 0) {
    arrayIndeks.push(srcImage.length - 1);
  } else {
    arrayIndeks.push(i - 1);
  }
}

let arrayImage = [];
for (let i = 0; i < srcImage.length; i++) {
  sliderItemsImg[i].src = srcImage[arrayIndeks[i]];
  arrayImage.push(srcImage[arrayIndeks[i]]);
}

animateContent(arrayIndeks[1]);

// ---------------------------------------------------------------------------------------------------------------
// Button Next
// ---------------------------------------------------------------------------------------------------------------

buttonSliderNext.addEventListener("click", function () {
  let arrayReActive = [];

  for (let i = 0; i < srcImage.length; i++) {
    arrayReActive.push(arrayIndeks[i] + 1 < srcImage.length ? arrayIndeks[i] + 1 : arrayIndeks[i] * 0);
  }
  arrayIndeks = [...arrayReActive];

  let arrayImage = [];
  for (let i = 0; i < srcImage.length; i++) {
    sliderItemsImg[i].src = srcImage[arrayIndeks[i]];
    arrayImage.push(srcImage[arrayIndeks[i]]);
  }
  animateContent(arrayIndeks[1]);
  animateSlider(1, 2, 3);
  printIndicator();
});

// ---------------------------------------------------------------------------------------------------------------
// Button Previous
// ---------------------------------------------------------------------------------------------------------------

buttonSliderPrevious.addEventListener("click", function () {
  let arrayReActive = [];
  for (let i = 0; i < srcImage.length; i++) {
    arrayReActive.push(arrayIndeks[i] - 1 == -1 ? srcImage.length - 1 : arrayIndeks[i] - 1);
  }
  arrayIndeks = [...arrayReActive];
  animateContent(arrayIndeks[1]);

  let arrayImage = [];
  for (let i = 0; i < srcImage.length; i++) {
    sliderItemsImg[i].src = srcImage[arrayIndeks[i]];
    arrayImage[i] = srcImage[arrayIndeks[i]];
  }
  animateSlider(4, 5, 6);
  printIndicator();
  // console.log(arrayIndeks);
});

// ---------------------------------------------------------------------------------------------------------------
// Responsive Trigger
// ---------------------------------------------------------------------------------------------------------------

function checkWidthWindow() {
  if (window.innerWidth >= 992) {
    arrayIndeks.splice(0, 3);
    for (let i = 0; i < srcImage.length; i++) {
      arrayIndeks.push(i);
    }

    arrayImage.splice(0, 3);
    for (let i = 0; i < srcImage.length; i++) {
      sliderItemsImg[i].src = srcImage[arrayIndeks[i]];
      arrayImage.push(srcImage[arrayIndeks[i]]);
    }

    animateContent(arrayIndeks[1]);
    printIndicator();
  } else {
    arrayIndeks.splice(0, 3);
    for (let i = 0; i < srcImage.length; i++) {
      if (i == 0) {
        arrayIndeks.push(srcImage.length - 1);
      } else {
        arrayIndeks.push(i - 1);
      }
    }

    arrayImage.splice(0, 3);
    for (let i = 0; i < srcImage.length; i++) {
      sliderItemsImg[i].src = srcImage[arrayIndeks[i]];
      arrayImage.push(srcImage[arrayIndeks[i]]);
    }

    animateContent(arrayIndeks[1]);
    printIndicator();
  }
}

checkWidthWindow();

// ---------------------------------------------------------------------------------------------------------------
// Indicator Button
// ---------------------------------------------------------------------------------------------------------------
let indicatorIndeks = [0];

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("indicator-button")) {
    let indicatorIndeksUpdate = e.target.getAttribute("indicator");

    if (indicatorIndeks[0] !== indicatorIndeksUpdate) {
      let eNumber = Number(indicatorIndeksUpdate);

      animateContent(eNumber);

      updateArray(eNumber - 1 == -1 ? srcImage.length - 1 : eNumber - 1);
      // selectAutomate(arrayIndeks[1]);

      if (indicatorIndeks[0] < eNumber) {
        animateSlider(1, 2, 3);
      } else {
        animateSlider(4, 5, 6);
      }

      printIndicator();

      indicatorIndeks.splice(0, 1);
      indicatorIndeks.unshift(eNumber);
      // console.log(arrayIndeks);
    }
  }
});
