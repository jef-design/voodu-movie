const API_KEY = process.env.REACT_APP_API_KEY

const request = {
            fetchTopRatedMovies:  `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
            fetchNowPlayingMovies:  `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&page=1`,
            fetchUpComingMovies:  `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&page=1`,
            fetchPopularMovies:  `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
            fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
            fetchPopularTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
            fetchAiringToday: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
            fetchOnTV: `tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
            fetchTopRatedTVshow: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
            fetchPopularPeople: `person/popular?api_key=${API_KEY}&language=en-US&page=`,
            fetchGenre: `/discover/movie?api_key=${API_KEY}&with_genres=`,
            fetchGenreList: `genre/movie/list?api_key=${API_KEY}&language=en-US`,
            fetchGenreTV: `/discover/tv?api_key=${API_KEY}&with_genres=`,
            fetchGenreListTV: `genre/tv/list?api_key=${API_KEY}&language=en-US`,
            searchedMovie: `search/movie?api_key=${API_KEY}&query=`,
            searchedTVShow: `search/tv?api_key=${API_KEY}&query=`,
            searchedPeople: `search/person?api_key=${API_KEY}&query=`,
}
export default request;