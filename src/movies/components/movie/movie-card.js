export class MovieCard {
  constructor (selector) {
    this.listItem = document.querySelectorAll(selector)
    console.log(this.listItem)

    this.setEvents()
  }

  setEvents () {
    this.listItem.forEach(element => {
      element.addEventListener('click', this.movieSelected.bind(this))
    })
  }

  movieSelected (event) {
    const clickedElement = event.currentTarget
    clickedElement.classList.toggle('movie--selected')
  }

  getListItem () {
    return this.listItem
  }
}

export default MovieCard
