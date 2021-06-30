import {combineReducers} from 'redux';
import movieReducer from './movieReducer'
import trailerReducer from './trailerReducer'
import selectedMovieReducer from './selectedMovieReducer';
import searchReducer from './searchReducer'
import castReducer from './castReducer';
import genreReducer from './genreReducer';
import tvshowReducer from './tvshowReducer';
import selectedTVReducer from './selectedTVReducer';
import episodesReducer from './episodesReducer'

const allreducers = combineReducers({
    fetchmovies : movieReducer,
    selectedMovie: selectedMovieReducer,
    trailer: trailerReducer,
    searchedMovie: searchReducer,
    castReducer: castReducer,
    genreReducer: genreReducer,
    fetchTVShows: tvshowReducer,
    selectedTV: selectedTVReducer,
    episodesList: episodesReducer
})

export default allreducers;