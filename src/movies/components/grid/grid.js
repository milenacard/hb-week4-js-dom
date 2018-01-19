/* mostrar las tarjetas y filtrarlas */
export class Grid {
  constructor (movieCard) {
    this.movieCard = movieCard
    this.resetValue = 'Reset'
    console.log(this.movieCard)
  }

  filterList (filterValue) {
    const movieList = this.movieCard.getListItem()
    console.log(movieList)
    /*
    const movieList = this.movieCard.getListItem()
    movieList.forEach(element => {
      const elementCategory = element.attributes['data-category'].value
      this.evaluateFilter(elementCategory, filterValue, element)
    })
    console.log(this.movieCard.getListItem())
    */
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
}

export default Grid
