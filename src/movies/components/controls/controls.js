/* Pintar los botones y notificar quien fue clickeado */
export class Control {
  constructor (node, movieData, callback) {
    this.node = node
    this.movieData = movieData
    this.resetValue = 'Reset'
    this.callback = callback
    const arrayCategories = this.getCategories()
    const arrayfiltered = this.filterCategory(arrayCategories)
    this.createControls(this.node, arrayfiltered)
    this.setEvents()
  }

  static get contentStructure () {
    return {
      buttons: `<li class="controls__button-item">
                  <button class="controls__button-category">{category}</button>
                </li>`
    }
  }

  getCategories () {
    const categoryArray = this.movieData.map(element => {
      return element.category
    })
    return categoryArray
  }

  filterCategory (categoryArray) {
    const arrayFiltered = categoryArray.filter((item, pos, ar) => {
      return ar.indexOf(item) === pos
    })
    return arrayFiltered
  }

  createControls (node, arrayFiltered) {
    const buttonCategory = arrayFiltered.map(element => {
      return Control.contentStructure.buttons
      .replace('{category}', element)
    })
    node.innerHTML += buttonCategory.join('')
  }

  setEvents () {
    this.node.addEventListener('click', this.getFilterValue.bind(this))
  }

  getFilterValue (event) {
    const clickedElement = event.target
    if (clickedElement.classList.contains('controls__button-category')) {
      return this.callback(event.target.innerText)
    }
  }
}

export default Control
