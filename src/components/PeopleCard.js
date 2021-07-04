import React from 'react';
import {Link} from 'react-router-dom';
import NoPortrait from "../assets/images/NoPortrait";

function PeopleCard({id,i, profile_path, name,character}) {
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    return (
        <React.Fragment key={i}>
                <Link to={`/person/${id}`}>
                <div  className="cast__container">
                    
                    {profile_path ? (
                            <img src={POSTERPATH_URL + profile_path} alt="" />
                        ) : (
                            <NoPortrait></NoPortrait>
                        )}
                    <p className="cast__name">{name}</p>
                    <p className="cast__character">{character}</p>
                </div>
                </Link>
            </React.Fragment>
    )
}

export default PeopleCard
