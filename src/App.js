import React from "react";
import "./style/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo";
import Home from "./components/pages/Home";
import SearchResults from "./components/SearchResults";
import People from "./components/People";
import TVshows from "./components/pages/TVshow/TVshows";
import Peoples from "./components/pages/Peoples";
import MoviesContainer from "./components/pages/Movies/MoviesContainer";
import TvShowContainer from './components/pages/TVshow/TvShowContainer'
import TopRated from "./components/pages/Movies/TopRated";
import Upcoming from "./components/pages/Movies/Upcoming";



function App() {
    return (
        <Router>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/movie/" component={MoviesContainer} />
                    <Route path="/tv/" component={TvShowContainer} />
                    {/* <Router path="/movie/toprated" component={TopRated} /> */}
                    {/* <Route  path="/movie/upcoming" component={Upcoming} /> */}
                    <Route path="/tvshows" component={TVshows} />
                    <Route path="/people" component={Peoples} />
                    <Route exact path="/movieinfo/:id" component={MovieInfo} />
                    <Route path="/results/" component={SearchResults} />
                    <Route path="/person/:id" component={People} />
                </Switch>
            </React.Fragment>
        </Router>
    );
}

export default App;
