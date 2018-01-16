export class Control {
    constructor (selector, movieCard) {
        this.movieCard = movieCard
        this.resetValue = 'Reset'
        this.listButtons = document.querySelectorAll(selector)
        console.log(this.listButtons)

        this.setEvents()
     }

     setEvents () {
        this.listButtons.forEach(element => {
            console.log(element)
            element.addEventListener('click', this.routineFilter.bind(this))
        })
     }

     routineFilter (event) {
        const filterValue = this.getFilterValue(event)
        this.filterList(this.movieCard, filterValue)
     }

     getFilterValue (event) {
        console.log(event)
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

     /* Va en el grid */
     hideElement (element) {
         element.style.display = 'none'
     }

     showElement (element) {
         element.style.display = 'inline-block'
     }
     /* Va en el grid */

     evaluateFilter(elementCategory, filterValue, element) {
         if(elementCategory === filterValue || this.resetValue === filterValue) {
             this.showElement(element)
         }else {
            this.hideElement(element)
        }
     }
}

export default Control
