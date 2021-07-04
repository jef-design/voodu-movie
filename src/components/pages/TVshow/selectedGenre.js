import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreTV } from "../../../redux/action/genreAction";
import TVshowCard from "../../TVshowCard";

function SelectedGenre() {
    const { id,name } = useParams();
    console.log(id)
    const genre = useSelector(state => state.genreReducer.genremovies);

    const dispatch = useDispatch();

    console.log("GENRE mobe", genre);
    useEffect(() => {
        dispatch(fetchGenreTV(id,name));
    }, [dispatch,id,name]);
    return (
  
            <div className="movies__container">
                {genre.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        name,
                        vote_average,
                        first_air_date,
                    } = movie;
                    return (
                        <TVshowCard
                            id={id}
                            key={index}
                            name={name}
                            poster_path={poster_path}
                            first_air_date={first_air_date}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
    );
}

export default SelectedGenre;
