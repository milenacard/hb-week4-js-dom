
 var slideIndex = 0;
 showDivs(slideIndex);

 const button_left = document.querySelector(".gallery__button--left");
 button_left.addEventListener('click', showDivs);

 const button_right = document.querySelector(".gallery__button--right");
 button_right.addEventListener('click', showDivs);

  function showDivs(index) {
    var i;
    const slides = document.querySelectorAll(".gallery__list-item");

    slides[slideIndex].classList.remove(".gallery__list-item--selected");
    slideIndex = index;
    console.log(slideIndex);
    slides[slideIndex].classList.add(".gallery__list-item--selected");
    
  }

