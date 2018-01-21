export class MovieCard {
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
      this.addAnimate()
    }
  }

  addAnimate () {
    const el = document.querySelector('.movie__info')
    el.classList.toggle('fadeInDown')
  }

  getListItem () {
    return this.node.querySelectorAll('.movie__list-item')
  }
}

export default MovieCard
