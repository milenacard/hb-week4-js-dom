/* Pintar los botones y notificar quien fue clickeado */
export class Control {
  constructor (node, movieData) {
    this.node = node
    this.movieData = movieData
    this.resetValue = 'Reset'
    // this.callback = callback
    // this.setEvents()
    this.createControls(this.node)
  }

  static get contentStructure () {
    return {
      buttons: `<li class="controls__button-item">
                  <button class="controls__button-category" data-category="{category}">{category}</button>
                </li>`
    }
  }

  createControls (node) {
    const buttonCategory = this.movieData.map(element => {
      return Control.contentStructure.buttons
      .replace('{category}', element.category)
      .replace('{category}', element.category)
    })
    node.innerHTML += buttonCategory.join('')
    console.log(node)
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
