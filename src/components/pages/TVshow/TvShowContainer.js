import React from "react";
import TVshows from "./TVshows";
import TopRated from './TopRated';
import AiringToday from './AiringToday'
import OnTv from './OnTv'
import TabsTv from './TabsTv'
import { Switch, Route } from "react-router-dom";
import GenreTV from './GenreTV';
import SelectedGenre from "./selectedGenre";
import { Helmet } from "react-helmet";


function MoviesContainer() {
    return (
        <section className="movies__pages__section">
             <Helmet>
                <title>Voodu | Browse TV Shows</title>
            </Helmet>
            <div>
                <TabsTv/>
                   <Switch>
                   <Route  path="/tv/popular" component={TVshows} />
                    <Route  path="/tv/airingtoday" component={AiringToday} />
                    <Route  path="/tv/ontv" component={OnTv} />
                    <Route  path="/tv/toprated" component={TopRated} />
                    <Route  path="/tv/genre" component={GenreTV} />
                    <Route  path="/tv/genres/:name/:id" component={SelectedGenre} />
                   </Switch>
            </div>
        </section>
    );
}

export default MoviesContainer;