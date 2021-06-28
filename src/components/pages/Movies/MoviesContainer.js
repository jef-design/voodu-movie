import React from "react";
import Popular from "./Popular";
import TopRated from './TopRated';
import Upcoming from './Upcoming'
import Tabs from './Tabs'
import { Switch, Route } from "react-router-dom";
import Genre from "../Genre/Genre";
import SelectedGenre from "../Genre/SelectedGenre"


function MoviesContainer() {
    return (
        <section className="movies__pages__section">

            <div>
                <Tabs/>
                   <Switch>
                   <Route  path="/movie/popular" component={Popular} />
                    <Route  path="/movie/toprated" component={TopRated} />
                    <Route  path="/movie/upcoming" component={Upcoming} />
                    <Route  path="/movie/genre" component={Genre} />
                    <Route  path="/movie/genres/:name/:id" component={SelectedGenre} />
                   </Switch>
            </div>
        </section>
    );
}

export default MoviesContainer;
