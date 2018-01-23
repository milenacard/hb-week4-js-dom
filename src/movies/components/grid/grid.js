/* mostrar las tarjetas y filtrarlas */
export class Grid {
  constructor (movieCard) {
    this.movieCard = movieCard
    this.resetValue = 'Reset'
  }

  filterList (filterValue) {
    const movieList = this.movieCard.getListItem()
    movieList.forEach(element => {
      const elementCategory = element.attributes['data-category'].value
      this.evaluateFilter(elementCategory, filterValue, element)
    })
  }

  hideElement (element) {
    element.classList.remove('movie__list-item--display-inline')
    element.classList.add('movie__list-item--display-none')
  }

  showElement (element) {
    element.classList.remove('movie__list-item--display-none')
    element.classList.add('movie__list-item--display-inline')
  }

  evaluateFilter (elementCategory, filterValue, element) {
    if (elementCategory === filterValue || this.resetValue === filterValue) {
      this.showElement(element)
    } else {
      this.hideElement(element)
    }
  }
}

export default Grid
