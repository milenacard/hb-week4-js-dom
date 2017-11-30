
 var slideIndex = 0;
 showImages(slideIndex);

 const button_left = document.querySelector(".gallery__button--left");
 button_left.addEventListener('click', function(){
  showImages(slideIndex -1);
 });

 const button_right = document.querySelector(".gallery__button--right");
 button_right.addEventListener('click', function(){
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

