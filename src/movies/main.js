import MovieData from './moviesData.js'
import MovieCard from './components/movie/movie-card.js'
import Control from './components/controls/controls.js'
import Grid from './components/grid/grid.js'

/* eslint-disable */
const control = new Control(document.querySelector('.controls__button-list'), MovieData, (identifier) => {
  grid.filterList(identifier)
})
const movieList = new MovieCard(document.querySelector('.movie__list'), MovieData)
const grid = new Grid(movieList)
/* eslint-enable */
