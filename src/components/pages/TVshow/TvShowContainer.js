import React from "react";
import TVshows from "./TVshows";
import TopRated from './TopRated';
import AiringToday from './AiringToday'
import OnTv from './OnTv'
import TabsTv from './TabsTv'
import { Switch, Route } from "react-router-dom";
import Genre from "../Genre/Genre";
import SelectedGenre from "../Genre/SelectedGenre"


function MoviesContainer() {
    return (
        <section className="movies__pages__section">

            <div>
                <TabsTv/>
                   <Switch>
                   <Route  path="/tv/popular" component={TVshows} />
                    <Route  path="/tv/airingtoday" component={AiringToday} />
                    <Route  path="/tv/ontv" component={OnTv} />
                    <Route  path="/tv/toprated" component={TopRated} />
                    <Route  path="/movie/genre" component={Genre} />
                    <Route  path="/movie/genres/:name/:id" component={SelectedGenre} />
                   </Switch>
            </div>
        </section>
    );
}

export default MoviesContainer;