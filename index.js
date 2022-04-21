const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const slideCnt = document.querySelectorAll('.slides li').length;
const slideWidth = 140;
const slideMargin = 20;
let currentIdx  = 0;

function handleLeftBtn() {
  console.log('handleLeftBtn is worked');
}

function handleRightBtn() {
  console.log('handleRightBtn is worked');
}


leftBtn.addEventListener('click', function() {
  moveSlide(currentIdx + 1);
})

rightBtn.addEventListener('click', function() {
  moveSlide(currentIdx - 1);
})

function moveSlide(num) {
  // slides.style.transform = `translateX(${-num * slideWidth}px)`;
  slides.style.left = -num * slideWidth + 'px';
  // slides.style.left = `(${-num * slideWidth}px)`;
  // slides.style.left = "50px";
  currentIdx = num;
  console.log(currentIdx, slideCnt);
  console.log(-num * (slideWidth) + 'px');
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

  updateWidth();
}

function updateWidth() {
  let currentSlides = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlides.length;
  
  let newWidth = (slideWidth + slideMargin) * newSlideCount + "px";
  console.log(newSlideCount, newWidth);
  slides.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin)  * 3;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}
initializationRender();
setInitialPos();
