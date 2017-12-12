//import data from './galleryData.js'

//console.log(data)

export class Gallery {
  constructor (node, data) {
    this.node = node
    this.slideIndex = 0
    this.elements = {}

    this.setContainer()
    this.setDots(data)
    this.setImage(data)
    this.setEvents()
  }

  static get states () {
    return{
      selectedClass = 'gallery__list-item--selected'
    }
  }

  static get templates () {
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
        `<li class="gallery__dot-item">
          <button class="gallery__dot-button" data-index="{index}"></button>
        </li>`
      )
    }
  }

  static imagesItemsHTML ({url}, index) {
    const selected = index === 0
    ? selectedClass
    : ''

    return (
    `<li class="gallery__list-item ${selected}">
    <img class="gallery__image" src="${url}"/>
    </li>`
    )
  }

  setContainer () {
    this.node.tabIndex = 0
    this.node.innerHTML = Gallery.templates.container
    elements.imageContainer = document.querySelector('.gallery__list')
    elements.buttonArrowLeft = document.querySelector('.gallery__button--left')
    elements.buttonArrowRight = document.querySelector('.gallery__button--right')
    elements.buttonsDots = document.querySelectorAll('.gallery__dot-item')
    elements.dotContainer = document.querySelector('.gallery__dots-list')
  }

// const node = document.querySelector('.gallery')
  setImage (data) {
    const galleryHTML = data.map(imagesItemsHTML).join('')
    elements.imageContainer.innerHTML = galleryHTML
    elements.galleryItem = document.querySelectorAll('.gallery__list-item')
    elements.galleryItem[slideIndex].classList.remove('gallery__list-item--selected')
  }

  setDots (data) {
    const dotHTML = (_, index) => {
      return templates().dot.replace(`{index}`, index)
    }

    const dotsHTML = Array.from(Array(elements.galleryItem.length)).map(dotHTML).join('')
    elements.dotContainer.innerHTML = dotsHTML
    elements.dot = elements.dotContainer.querySelector('.gallery__dot-button')
    elements.dot.classList.add('gallery__dot-button--selected')
    elements.dots = document.querySelectorAll('.gallery__dot-button')
  }

  setEvents () {
    this.elements.buttonArrowLeft.addEventListener('click', function () { indexShowImage(slideIndex - 1)})
    this.elements.buttonArrowRight.addEventListener('click', function () {indexShowImage(slideIndex + 1)})
    this.elements.dotContainer.addEventListener('click', this.dotTarget.bind(this))
    this.node.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  indexShowImage (index) {
    const isPositive = index >= 0
    const isLessThanLength = index < elements.galleryItem.length
    const isDifferentThanCurrent = index !== slideIndex

    disableArrow(index)

    if (isPositive && isLessThanLength && isDifferentThanCurrent) {
      elements.galleryItem[slideIndex].classList.remove('gallery__list-item--selected')
      elements.dots[slideIndex].classList.remove('gallery__dot-button--selected')
      slideIndex = index
      elements.galleryItem[slideIndex].classList.add('gallery__list-item--selected')
      elements.dots[slideIndex].classList.add('gallery__dot-button--selected')
    }
  }

  disableArrow (index) {
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

  dotTarget (event) {
    const clickedElement = event.target
    if (clickedElement.classList.contains('gallery__dot-button')) {
      indexShowImage(Number(clickedElement.dataset.index))
    }
  }

  keydownHandler (key) {
    switch (key) {
      case 'ArrowLeft': indexShowImage(slideIndex - 1)
        break
      case 'ArrowRight': indexShowImage(slideIndex + 1)
        break
    }
  }
}

