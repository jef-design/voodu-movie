import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import AlternativeMoviePoster from "../../../assets/images/AlternativeMoviePoster";

function TVshowCard({
    id,
    name,
    poster_path,
    first_air_date,
    vote_average,
}) {
    const API_IMG = `https://image.tmdb.org/t/p/w500/`;

    const CurrentYear = new Date(first_air_date).getFullYear();
    const onClickLink = () => {
        window.scrollTo(0, 0);
    };
    return (
        <React.Fragment>
            <Link
                to={`/tvinfo/${id}`}
                onClick={onClickLink()}
                style={{ textDecoration: "none" }}
            >
                <div className="card">
                    {poster_path ? (
                        <img src={API_IMG + poster_path} alt="" />
                    ) : (
                        <AlternativeMoviePoster></AlternativeMoviePoster>
                    )}
                    <p className="card__title">
                        {name} ({CurrentYear})
                    </p>
                    <div className="card__desc">
                        {/* <div>
                            {release_date}
                            {first_air_date}
                        </div> */}
                        <div className="card__rating">
                            <p>{vote_average}</p>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                starCount={1}
                                value={vote_average}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}

export default TVshowCard;
