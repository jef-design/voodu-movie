import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {searchedPeople} from '../../../../redux/action/searchAction'
import PeopleCard from "../../../main/People/PeopleCard";


function TabMovie() {
    const query = useSelector(state => state.searchedText.text);
    const peoples = useSelector(state => state.searchresult.people)
    console.log(peoples)
    const dispatch = useDispatch();

 useEffect(() => {
    dispatch(searchedPeople(query))
 }, [dispatch,query])

    return (
        <div className="search__movie__container">
        {peoples.map((mov, index) => {
                const {
                    id,
                    name,
                    profile_path,
                } = mov;
                return (
                    <React.Fragment key={index}>
                        <PeopleCard
                            key={index}
                            id={id}
                            name={name}
                            profile_path={profile_path}
                        />
                    </React.Fragment>
                );
            })}
        </div>
        
    );
}

export default TabMovie;
