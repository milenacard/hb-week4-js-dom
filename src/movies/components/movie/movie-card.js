/* global DOMParser */
export class MovieCard {
  constructor (parent, dataCard, callback) {
    this.parent = parent
    this.callback = callback
    this.contents = this.createCard(dataCard)
    this.node = this.buildUI(this.contents)
    this.attachEvents()
  }

  static get contentStructure () {
    return {
      card: `<li class="movie__list-item" data-category="{category}">
              <div class="movie__front">
                <img class="movie__front-image" src={url}>
                <h1 class="movie__front-title">{title}</h1>
                <h2 class="movie__front-category">{category}</h2>
              </div>
              <div class="movie__info">
                <h2 class="movie__info-description">Sinopsis:</h2>
                <h3 class="movie__info-description-text">{description}</h3>
              </div>
            </li>`
    }
  }

  createCard (dataCard) {
    return MovieCard.contentStructure.card
    .replace('{category}', dataCard.category)
    .replace('{url}', dataCard.url)
    .replace('{title}', dataCard.title)
    .replace('{category}', dataCard.category)
    .replace('{description}', dataCard.description)
  }

  buildUI (contents) {
    return this.generateDOM(contents)
  }

  generateDOM (string) {
    const domParse = new DOMParser()
    return domParse.parseFromString(string, 'text/html').body.children[0]
  }

  attachEvents () {
    this.node.addEventListener('click', (event) => {
      this.callback(event.currentTarget)
    })
  }
   /*
  constructor (node, movieData) {
    this.node = node
    this.movieData = movieData
    this.createCard(node)
    this.setEvents()
    this.getListItem()
  }

  static get contentStructure () {
    return {
      card: `<li class="movie__list-item" data-category="{category}">
              <div class="movie__front">
                <img class="movie__front-image" src={url}>
                <h1 class="movie__front-title">{title}</h1>
                <h2 class="movie__front-category">{category}</h2>
              </div>
              <div class="movie__info">
                <h2 class="movie__info-description">Sinopsis:</h2>
                <h3 class="movie__info-description-text">{description}</h3>
              </div>
            </li>`
    }
  }

  createCard (node) {
    const cardPhoto = this.movieData.map(element => {
      return MovieCard.contentStructure.card
      .replace('{category}', element.category)
      .replace('{url}', element.url)
      .replace('{title}', element.title)
      .replace('{category}', element.category)
      .replace('{description}', element.description)
    })
    node.innerHTML = cardPhoto.join('')
  }

  setEvents () {
    const listItem = this.node.querySelectorAll('.movie__list-item')
    listItem.forEach(element => {
      element.addEventListener('click', this.movieSelected.bind(this))
    })
  }

  movieSelected (event) {
    const clickedElement = event.currentTarget
    if (clickedElement.classList.contains('movie__list-item')) {
      clickedElement.classList.toggle('movie--selected')
    }
  }

  getListItem () {
    return this.node.querySelectorAll('.movie__list-item')
  }
  */
}

export default MovieCard
