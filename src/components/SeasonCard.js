import React from "react";
import { Link } from "react-router-dom";
import AlternativeImage from "./images/AlternativeImage";
import { useParams } from "react-router-dom";

function SeasonCard({
    season_number,
    name,
    poster_path,
    i
}) {
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    const { id } = useParams();

    return (
        <React.Fragment key={i}>
            <Link
                to={`/episode/${season_number}`}
            >
                <div className="tv__seasons__card">
                    {poster_path ? (
                        <img src={POSTERPATH_URL + poster_path} alt="" />
                    ) : (
                        <AlternativeImage></AlternativeImage>
                    )}
                   <p>{name}</p>
                   
                </div>
            </Link>
        </React.Fragment>
    );
}

export default SeasonCard;
