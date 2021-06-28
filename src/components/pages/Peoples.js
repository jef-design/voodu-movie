import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople } from "../../redux/action/movieAction";
import PeopleCard from "../PeopleCard";
import PaginationBar from "../common/Pagination";
import Pagination from "react-js-pagination";
import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from "react-loading-skeleton";


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
                 {/* <Pagination
                activePage={popularpeople.page}
                itemsCountPerPage={1}
                onChange={fetchData}
                pageRangeDisplayed={10}
                totalItemsCount={popularpeople.total_pages}
                totalPage={popularpeople.total_pages}
            /> */}
                {popularpeople.map((movie, index) => {
                    const { id, profile_path, name } = movie;
                    return (
                        <>
                        {/* <Skeleton height={100} width={100} /> */}
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
