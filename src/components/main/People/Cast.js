import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCast } from "../../../redux/action/movieAction";

function Cast() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const fullcasts = useSelector(state => state.castReducer.casts);
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;

    useEffect(() => {
        dispatch(fetchCast(id));
    }, [dispatch, id]);

    console.log("castssss", fullcasts);
    return (
        <div>
            {fullcasts.map((c, index) => {
                const { profile_path, name, character } = c;
                return (
                    <React.Fragment>
                        <div className="slider">
                            <div className="slider__wrapper">
                                <div key={index} className="cast__container">
                                    <img
                                        src={POSTERPATH_URL + profile_path}
                                        alt=""
                                    />
                                    <p className="cast__name" >{name}</p>
                                    <p className="cast__character" >{character}</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Cast;
