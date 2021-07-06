import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {searchedMovie} from '../../../../redux/action/searchAction'
import MovieCard from "../../../main/Movies/MovieCard";


function TabMovie() {
    const query = useSelector(state => state.searchedMovie.text);
    const movies = useSelector(state => state.searchresult.movie)
    const dispatch = useDispatch();
    // const searchInputRef = useRef();

 useEffect(() => {
    dispatch(searchedMovie(query))
 }, [dispatch,query])

    return (
        <div className="search__movie__container">
        {movies.map((mov, index) => {
                const {
                    id,
                    title,
                    poster_path,
                    release_date,
                    vote_average,
                } = mov;
                return (
                    <React.Fragment key={index}>
                        <MovieCard
                            key={index}
                            id={id}
                            title={title}
                            poster_path={poster_path}
                            release_date={release_date}
                            vote_average={vote_average}
                        />
                    </React.Fragment>
                );
            })}
        </div>
        
    );
}

export default TabMovie;
