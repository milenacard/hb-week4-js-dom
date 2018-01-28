// import MovieData from './moviesData.js'
import Control from './components/controls/controls.js'
import Grid from './components/grid/grid.js'
import DataRetriever from './components/DataRetriever.js'

/* eslint-disable */
const URL = 'https://api.myjson.com/bins/gim2x'

DataRetriever.get(URL, (data) => {
  new Control(document.querySelector('.controls__button-list'), data, (identifier) => {
    grid.filterList(identifier)
  })
  const grid = new Grid(document.querySelector('.movie__list'), data, (clickedElement) =>{
    if (clickedElement.classList.contains('movie__list-item')) {
      clickedElement.classList.toggle('movie--selected')
    }
  })
})

// new Control(document.querySelector('.controls__button-list'), MovieData, (identifier) => {
//   grid.filterList(identifier)
// })
// const movieList = new MovieCard(document.querySelector('.movie__list'), MovieData)
// const grid = new Grid(movieList)
/* eslint-enable */
