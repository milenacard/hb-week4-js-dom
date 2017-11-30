
(function(){
  var slideIndex = 1;
  showDivs(slideIndex);

  const button_left = document.querySelector(".gallery__button--left");
  button_left.addEventListener('click', showDivs(slideIndex += -1));

  const button_right = document.querySelector(".gallery__button--right");
  button_right.addEventListener('click', showDivs(slideIndex += +1));

  function showDivs(index) {
    var i;
    const slide = document.querySelector(".gallery__image");
  
    if(index > slide.length) {
      slideIndex = 1;
    }
  
    if (index < 1) {
      slideIndex = index.length;
    }
  
    for(i= 0; i < index.length; i++){
      x[i].classList.add(".gallery__image--selected");
    }
  
  }

}) ();

