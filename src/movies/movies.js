import MovieCard from './components/movie/movie-card.js'
import Control from './components/controls/controls.js'

/* eslint-disable */
const movieList = new MovieCard('.movie__list-item')
new Control('.controls__button-item', movieList)
/* eslint-enable */
