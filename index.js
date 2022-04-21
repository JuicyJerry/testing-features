const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');

const slideCnt = document.querySelectorAll('.slides li').length;
const slideWidth = 5;

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

function handleLeftBtn() {
  console.log('handleLeftBtn is worked');
}

function handleRightBtn() {
  console.log('handleRightBtn is worked');
}

function initializationRender() {
  for (let i = 0; i < slideCnt; i++) {
    let clone = slide[i].cloneNode(true);
    clone.classList.add('clone');
    slides.appendChild(clone);
  }

  for (let i = slideCnt - 1; i >= 0; i--) {
    console.log(slide, slideCnt);

    let clone = slide[i].cloneNode(true);
    clone.classList.add('clone');
    slides.prepend(clone);
  }
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth * 3);
  slides.style.transform = translateX(`${initialTranslateValue} + vw`);
}
initializationRender();
