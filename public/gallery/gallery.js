import data from './galleryData.js'

console.log(data)
/*
export class Gallery {
  constructor (node, data) {
    this.node = node;
    this.index = 0;
  }
*/

// TODO
// Funcionamiento del teclado - escuchador
// Dots- pintarlos, inflarlos, escuchador
var elements = {}
window.elements = elements
let slideIndex = 0
var selectedClass = 'gallery__list-item--selected'
const node = document.querySelector('.gallery')

node.innerHTML = templates(slideIndex).container
elements.imageContainer = document.querySelector('.gallery__list')
elements.buttonArrowLeft = document.querySelector('.gallery__button--left')
elements.buttonArrowRight = document.querySelector('.gallery__button--right')
elements.buttonsDots = document.querySelectorAll('.gallery__dot-item')
elements.buttonDot = document.querySelector('.gallery__dots-list')

const galleryHTML = data.map(imagesItemsHTML).join('')
elements.imageContainer.innerHTML = galleryHTML
elements.galleryItem = document.querySelectorAll('.gallery__list-item')

indexShowImage(slideIndex)
node.tabIndex = 0

function imagesItemsHTML ({url}, index) {
  const selected = index === 0
  ? selectedClass
  : ''

  return (
  `<li class="gallery__list-item ${selected}">
  <img class="gallery__image" src="${url}"/>
  </li>`
  )
}

function templates (index) {
  return {
    container: (
      `<ul class="gallery__list"></ul>
      <div class="gallery__button-container"> 
        <button class="gallery__button gallery__button--left gallery__button--arrowDisable">&#10094;</button>
        <button class="gallery__button gallery__button--right">&#10095;</button>
      </div>
      <section class="gallery__dots-container">
        <ul class="gallery__dots-list"></u>
      </section>`
    ),
    dot: (
      `<li class="gallery__dot-item gallery__dot-item--selected">
        <button class="gallery__dot-button"  data-index="${index}"></button>
      </li>`
    )
  }
}

node.addEventListener('keydown', function (event) {
  const k = event.key
  keydownHandler(k)
})

elements.buttonArrowLeft.addEventListener('click', function () {
  indexShowImage(slideIndex - 1)
})

elements.buttonArrowRight.addEventListener('click', function () {
  indexShowImage(slideIndex + 1)
})

elements.buttonDot.addEventListener('click', function (event) {
  const clickedElement = event.target
  if (clickedElement.classList.contains('gallery__dot-button')) {
    indexShowImage(Number(clickedElement.dataset.index))
  }
})

function indexShowImage (index) {
  const isPositive = index >= 0
  const isLessThanLength = index < elements.galleryItem.length
  const isDifferentThanCurrent = index !== slideIndex

  disableArrow(index)

  if (isPositive && isLessThanLength && isDifferentThanCurrent) {
    elements.galleryItem[slideIndex].classList.remove('gallery__list-item--selected')
    slideIndex = index
    console.log(slideIndex)
    elements.galleryItem[slideIndex].classList.add('gallery__list-item--selected')
  }
}

function disableArrow (index) {
  const isfirst = index === 0
  const isLast = index === elements.galleryItem.length - 1

  elements.buttonArrowLeft.classList.remove('gallery__button--arrowDisable')
  elements.buttonArrowRight.classList.remove('gallery__button--arrowDisable')

  if (isfirst) {
    elements.buttonArrowLeft.classList.add('gallery__button--arrowDisable')
  }
  if (isLast) {
    elements.buttonArrowRight.classList.add('gallery__button--arrowDisable')
  }
}

function keydownHandler (key) {
  switch (key) {
    case 'ArrowLeft': indexShowImage(slideIndex - 1)
      break
    case 'ArrowRight': indexShowImage(slideIndex + 1)
      break
  }
}

/*

const buttonsDots = document.querySelectorAll('.gallery__dot-item')
const buttonDot = document.querySelector('.gallery__dots-list')

node.addEventListener('keydown', function (event) {
  const k = event.key
  keydownHandler(k)
})

buttonDot.addEventListener('click', function (event) {
  const clickedElement = event.target
  if (clickedElement.classList.contains('gallery__dot-button')) {
    showImages(Number(clickedElement.dataset.index))
  }
})

function showImages (index) {
  const isPositive = index >= 0
  const isLessThanLength = index < slides.length
  const isDifferentThanCurrent = index !== slideIndex
  const isfirst = index === 0
  const isLast = index === slides.length - 1

  if (isPositive && isLessThanLength && isDifferentThanCurrent) {
    slides[slideIndex].classList.remove('gallery__list-item--selected')
    buttonsDots[slideIndex].classList.remove('gallery__dot-item--selected')
    slideIndex = index

    buttonsDots[index].classList.add('gallery__dot-item--selected')
    buttonsDots[index].focus()
    slides[slideIndex].classList.add('gallery__list-item--selected')
  }
}

function keydownHandler (key) {
  switch (key) {
    case 'ArrowLeft': showImages(slideIndex - 1)
      break
    case 'ArrowRight': showImages(slideIndex + 1)
      break
  }
}
*/
