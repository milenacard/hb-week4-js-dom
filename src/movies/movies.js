import MovieCard from './components/movie/movie-card.js'
import Control from './components/controls/controls.js'
import Grid from './components/grid/grid.js'

/* eslint-disable */
const movieList = new MovieCard('.movie__list-item')
const grid = new Grid()
const control = new Control('.controls__button-item', movieList, function (category) {
  grid.filterList(movieList, category)
})
/* eslint-enable */
