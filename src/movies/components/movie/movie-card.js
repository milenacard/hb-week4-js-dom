export class MovieCard {
  constructor (selector) {
    this.listItem = document.querySelector(selector)
    console.log(this.listItem)

    this.setEvents()
  }

  setEvents () {
    this.listItem.addEventListener('click', this.movieSelected.bind(this))
  }

  movieSelected (event) {
    const clickedElement = event.currentTarget
    clickedElement.classList.add('movie--selected')
  }
}

export default MovieCard
