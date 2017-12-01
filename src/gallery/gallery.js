
 let slideIndex = 0;
 const button_arrow_left = document.querySelector(".gallery__button--left");
 const button_arrow_right = document.querySelector(".gallery__button--right");
 const button_dot = document.querySelector(".gallery__dot-button");
 
 
 showImages(slideIndex);

 button_arrow_left.addEventListener('click', function(){
  showImages(slideIndex -1);
 });

 button_arrow_right.addEventListener('click', function(){
  showImages(slideIndex + 1);
 });

function showImages(index) {
  var i;
  const slides = document.querySelectorAll(".gallery__list-item");
  const isPositive = index >= 0;
  const isLessThanLength = index < slides.length;
  const isDifferentThanCurrent = index !== slideIndex;

  if (isPositive && isLessThanLength && isDifferentThanCurrent) {
  slides[slideIndex].classList.remove("gallery__list-item--selected");
  slideIndex = index;
  slides[slideIndex].classList.add("gallery__list-item--selected");
  }
}

function dots(){
  const buttons_dots = document.querySelectorAll("gallery__dot-item");
}

