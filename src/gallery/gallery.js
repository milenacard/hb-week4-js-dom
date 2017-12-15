export class Gallery {
  constructor (node, data) {
    this.node = node
    this.slideIndex = 0
    this.elements = {}

    this.setContainer()
    this.setImage(data)
    this.setDots(data)
    this.setEvents()
  }

  static get state () {
    return {
      imageSelected: 'gallery__list-item--selected',
      dotSelected: 'gallery__dot-button--selected',
      arrowDisable: 'gallery__button--arrowDisable'
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
    ? Gallery.state.imageSelected
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
    this.elements.imageContainer = document.querySelector('.gallery__list')
    this.elements.buttonArrowLeft = document.querySelector('.gallery__button--left')
    this.elements.buttonArrowRight = document.querySelector('.gallery__button--right')
    this.elements.buttonsDots = document.querySelectorAll('.gallery__dot-item')
    this.elements.dotContainer = document.querySelector('.gallery__dots-list')
  }

  setImage (data) {
    const galleryHTML = data.map(Gallery.imagesItemsHTML).join('')
    this.elements.imageContainer.innerHTML = galleryHTML
    this.elements.galleryItem = document.querySelectorAll('.gallery__list-item')
    this.elements.galleryItem[this.slideIndex].classList.add(Gallery.state.imageSelected)
  }

  setDots (data) {
    const dotHTML = (_, index) => {
      return Gallery.templates.dot.replace(`{index}`, index)
    }

    const dotsHTML = Array.from(Array(this.elements.galleryItem.length)).map(dotHTML).join('')
    this.elements.dotContainer.innerHTML = dotsHTML
    console.log(this.elements.dotContainer)
    this.elements.dot = this.elements.dotContainer.querySelector('.gallery__dot-button')
    this.elements.dot.classList.add(Gallery.state.dotSelected)
    this.elements.dots = document.querySelectorAll('.gallery__dot-button')
  }

  setEvents () {
    this.elements.buttonArrowLeft.addEventListener('click', this.goPrevious.bind(this))
    this.elements.buttonArrowRight.addEventListener('click', this.goNext.bind(this))
    this.elements.dotContainer.addEventListener('click', this.dotTarget.bind(this))
    this.node.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  indexShowImage (index) {
    const isPositive = index >= 0
    const isLessThanLength = index < this.elements.galleryItem.length
    const isDifferentThanCurrent = index !== this.slideIndex

    this.disableArrow(index)

    if (isPositive && isLessThanLength && isDifferentThanCurrent) {
      this.elements.galleryItem[this.slideIndex].classList.remove(Gallery.state.imageSelected)
      this.elements.dots[this.slideIndex].classList.remove(Gallery.state.dotSelected)
      this.slideIndex = index
      this.elements.galleryItem[this.slideIndex].classList.add(Gallery.state.imageSelected)
      this.elements.dots[this.slideIndex].classList.add(Gallery.state.dotSelected)
    }
  }

  disableArrow (index) {
    const isfirst = index === 0
    const isLast = index === this.elements.galleryItem.length - 1

    this.elements.buttonArrowLeft.classList.remove(Gallery.state.arrowDisable)
    this.elements.buttonArrowRight.classList.remove(Gallery.state.arrowDisable)

    if (isfirst) {
      this.elements.buttonArrowLeft.classList.add(Gallery.state.arrowDisable)
    }
    if (isLast) {
      this.elements.buttonArrowRight.classList.add(Gallery.state.arrowDisable)
    }
  }

  goNext () {
    this.indexShowImage(this.slideIndex + 1)
  }

  goPrevious () {
    this.indexShowImage(this.slideIndex - 1)
  }

  dotTarget (event) {
    const clickedElement = event.target
    if (clickedElement.classList.contains('gallery__dot-button')) {
      this.indexShowImage(Number(clickedElement.dataset.index))
    }
  }

  keydownHandler ({key}) {
    switch (key) {
      case 'ArrowLeft': this.goPrevious()
        break
      case 'ArrowRight': this.goNext()
        break
    }
  }
}

export default Gallery
