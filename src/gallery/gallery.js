
 let slideIndex = 0;
 const slides = document.querySelectorAll(".gallery__list-item"); 
 const buttons_dots = document.querySelectorAll(".gallery__dot-item");
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

button_dot.addEventListener('click', function(){
  showImages();
});

function showImages(index) {
  var i;
  const isPositive = index >= 0;
  const isLessThanLength = index < slides.length;
  const isDifferentThanCurrent = index !== slideIndex;

  if(index + 1 == slides.length){
    button_arrow_right.setAttribute('disabled','');
  }else{
    button_arrow_right.removeAttribute('disabled');
  }

  if(index == 0){
    button_arrow_left.setAttribute('disabled','');
  }else{
    button_arrow_left.removeAttribute('disabled');
  }
  
  if (isPositive && isLessThanLength && isDifferentThanCurrent) {
  slides[slideIndex].classList.remove("gallery__list-item--selected");

  buttons_dots[slideIndex].classList.remove("gallery__dot-item--selected");
  slideIndex = index;

  buttons_dots[index].classList.add("gallery__dot-item--selected");
  slides[slideIndex].classList.add("gallery__list-item--selected");
  }
}


function dots(){
  
}


