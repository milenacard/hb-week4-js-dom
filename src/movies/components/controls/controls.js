/* Pintar los botones y notificar quien fue clickeado */
export class Control {
  constructor (selector, movieCard, callback) {
    this.movieCard = movieCard
    this.resetValue = 'Reset'
    this.callback = callback
    this.listButtons = document.querySelectorAll(selector)

    this.setEvents()
  }

  setEvents () {
    this.listButtons.forEach(element => {
      console.log(element)
      element.addEventListener('click', this.getFilterValue)
    })
  }

  getFilterValue (event) {
    return this.callback(event.target.innerText)
  }

  /*
  routineFilter (event) {
    const filterValue = this.getFilterValue(event)
    this.filterList(this.movieCard, filterValue)
  }

  getFilterValue (event) {
    return event.target.innerText
  }

  filterList (movieCard, filterValue) {
    const movieList = movieCard.getListItem()
    movieList.forEach(element => {
      const elementCategory = element.attributes['data-category'].value
      this.evaluateFilter(elementCategory, filterValue, element)
    })
    console.log(movieCard.getListItem())
  }

  hideElement (element) {
    element.style.display = 'none'
  }

  showElement (element) {
    element.style.display = 'inline-block'
  }

  evaluateFilter (elementCategory, filterValue, element) {
    if (elementCategory === filterValue || this.resetValue === filterValue) {
      this.showElement(element)
    } else {
      this.hideElement(element)
    }
  }
  */
}

export default Control
