
 let slideIndex = 0;
 const node = document.querySelector(".gallery");
 const slides = document.querySelectorAll(".gallery__list-item"); 
 const buttonsDots = document.querySelectorAll(".gallery__dot-item");
 const buttonDot = document.querySelector(".gallery__dots-list");
 const buttonArrowLeft = document.querySelector(".gallery__button--left");
 const buttonArrowRight = document.querySelector(".gallery__button--right");
 
showImages(slideIndex);
node.tabIndex = 0;
 
node.addEventListener('keydown', function(event){
  const k = event.key;
  keydownHandler(k);
});

buttonArrowLeft.addEventListener('click', function(){
  showImages(slideIndex -1);
});

buttonArrowRight.addEventListener('click', function(){
  showImages(slideIndex + 1);
});

buttonDot.addEventListener('click', function(event) {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('gallery__dot-button')) {
    showImages(Number(clickedElement.dataset.index));
  }
});

function showImages(index) {
  var i;
  const isPositive = index >= 0;
  const isLessThanLength = index < slides.length;
  const isDifferentThanCurrent = index !== slideIndex;
  const isfirst = index === 0;
  const isLast = index === slides.length - 1;

  buttonArrowLeft.classList.remove("gallery__button--arrowDisable");
  buttonArrowRight.classList.remove("gallery__button--arrowDisable");

  if(isfirst){
    buttonArrowLeft.classList.add("gallery__button--arrowDisable");
  }
  if(isLast){
    buttonArrowRight.classList.add("gallery__button--arrowDisable");
  }
  
  if (isPositive && isLessThanLength && isDifferentThanCurrent) {
  slides[slideIndex].classList.remove("gallery__list-item--selected");
  buttonsDots[slideIndex].classList.remove("gallery__dot-item--selected");
  slideIndex = index;

  buttonsDots[index].classList.add("gallery__dot-item--selected");
  buttonsDots[index].focus();
  slides[slideIndex].classList.add("gallery__list-item--selected");
  }
}

function keydownHandler(key){
  switch (key) {
    case 'ArrowLeft': showImages(slideIndex -1);
      break;
    case 'ArrowRight': showImages(slideIndex + 1);
      break;
  }
}



