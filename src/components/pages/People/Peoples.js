import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople } from "../../../redux/action/peopleAction";
import PeopleCard from "../../main/People/PeopleCard";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";
import SkeletonElements from "../../common/Skeleton/SkeletonElements";
import SkeletonPeople from "../../common/Skeleton/SkeletonPeoples";



function People() {
    const popularpeople = useSelector(state => state.peopleReducer.popularpeople);
    const loading = useSelector(state => state.miscLoading.loading)
    console.log(popularpeople)
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularPeople(page));
        // setPage(page => page + 1);
    }, [dispatch,page]);
    // const fetchData = () => {
    //     dispatch(fetchPopularPeople(page));
    //     setPage(page => page + 1);
    // };
        return (
            <section className="movies__pages__section">
                 <Helmet>
                    <title>Voodu | Popular People</title>
                </Helmet>
                <h1>Popular People</h1>
                {/* <p>{popularpeople.total_results}</p> */}
                
                <div className="movies__container">
                    {popularpeople.map((movie, index) => {
                        const { id, profile_path, name } = movie;
                        return (
                            <>
                                {loading ? <SkeletonPeople/> : 
                                <PeopleCard
                                key={index}
                                id={id}
                                name={name}
                                profile_path={profile_path}
                            />}
                            </>
                        );
                    })}
                </div>
                
               
            </section>
        );
    // }
}
export default People;

