/* mostrar las tarjetas y filtrarlas */
import MovieCard from '../movie/movie-card.js'

export class Grid {
  constructor (node, movieData, callback) {
    this.node = node
    this.callback = callback
    this.movieData = movieData
    this.resetValue = 'Reset'
    this.movieList = this.buildUI(movieData)
  }

  buildUI (movieData) {
    const movieCardList = movieData.map(element => {
      return new MovieCard(this.node, element, this.callback)
    })
    const list = movieCardList.map(element => {
      this.node.appendChild(element.node)
      return element.node
    })
    return list
  }

  filterList (filterValue) {
    this.movieList.forEach(element => {
      const elementCategory = element.attributes['data-category'].value
      this.evaluateFilter(elementCategory, filterValue, element)
    })
  }

  hideElement (element) {
    element.classList.add('movie__list-item--display-hidden')
  }

  showElement (element) {
    element.classList.remove('movie__list-item--display-hidden')
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
