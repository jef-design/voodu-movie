const API_KEY = `5cffc0e248a2072bdedd8248f5d9f423`

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
            fetchGenre: `/discover/movie?api_key=${API_KEY}&with_genres=`,
            fetchPopularPeople: `person/popular?api_key=${API_KEY}&language=en-US&page=`,
            fetchGenreList: `genre/movie/list?api_key=${API_KEY}&language=en-US`
}
export default request;