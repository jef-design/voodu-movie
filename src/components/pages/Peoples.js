import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople } from "../../redux/action/movieAction";
import PeopleCard from "../PeopleCard";



function People() {
    const popularpeople = useSelector(state => state.fetchmovies.popularpeople);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularPeople(page));
        setPage(page => page + 1);
    }, [dispatch]);
    const fetchData = () => {
        dispatch(fetchPopularPeople(page));
        setPage(page => page + 1);
    };
    if(popularpeople.loading){
        console.log(popularpeople.loading)
              return <p>loading.....</p>
    
}
    return (
        <section className="movies__pages__section">
            <h1>People</h1>
            <p>{popularpeople.total_results}</p>
            
            <div className="movies__container">
                {popularpeople.map((movie, index) => {
                    const { id, profile_path, name } = movie;
                    return (
                        <>
                            <PeopleCard
                                key={index}
                                id={id}
                                name={name}
                                profile_path={profile_path}
                            />
                        </>
                    );
                })}
            </div>
            
           
        </section>
    );
}

export default People;
