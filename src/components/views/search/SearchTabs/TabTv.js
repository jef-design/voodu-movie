import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {searchedTVShow} from '../../../../redux/action/searchAction'
import TVshowCard from "../../../main/TVshows/TVshowCard";


function TabTv() {
    const query = useSelector(state => state.searchedText.text);
    const tvshow = useSelector(state => state.searchresult.tv)
    const dispatch = useDispatch();
    // const searchInputRef = useRef();

 useEffect(() => {
    dispatch(searchedTVShow(query))
 }, [dispatch,query])

    return (
        <div className="search__movie__container">
        {tvshow.map((mov, index) => {
                const {
                    id,
                    name,
                    poster_path,
                    first_air_date,
                    vote_average,
                } = mov;
                return (
                    <React.Fragment key={index}>
                        <TVshowCard
                            key={index}
                            id={id}
                            name={name}
                            poster_path={poster_path}
                            first_air_date={first_air_date}
                            vote_average={vote_average}
                        />
                    </React.Fragment>
                );
            })}
        </div>
        
    );
}

export default TabTv;
