import React from "react";
import "./style/App.css";
import Header from "./components/main/Header/Header";
import { Router, Switch, Route } from "react-router-dom";
import MovieInfo from "./components/main/Movies/MovieInfo";
import Home from "./components/pages/Home/Home";
import Footer from "./components/main/Footer/Footer";
// import SearchResults from "./components/SearchResults";
import People from "./components/main/People/People";
import TVshows from "./components/pages/TVshow/TVshows";
import Peoples from "./components/pages/People/Peoples";
import MoviesContainer from "./components/pages/Movies/MoviesContainer";
import TvShowContainer from './components/pages/TVshow/TvShowContainer'
import TVshowInfo from "./components/main/TVshows/TVshowInfo";
import Episodes from "./components/main/Episodes/Episodes";
import SearchContainer from "./components/views/search/SearchContainer";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

function App() {
    
    return (
        <Router history={history}>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/movie/" component={MoviesContainer} />
                    <Route path="/tv/" component={TvShowContainer} />
                    <Route path="/tvshows" component={TVshows} />
                    <Route path="/people" component={Peoples} />
                    <Route exact path="/movieinfo/:id" component={MovieInfo} />
                    <Route exact path="/tvinfo/:id" component={TVshowInfo} />
                    <Route exact path="/tvinfo/:id/episode/:seasonnumber/" component={Episodes} />
                    <Route path="/results/:search" component={SearchContainer} />
                    <Route path="/person/:id" component={People} />
                </Switch>
                <Footer/>
            </React.Fragment>
        </Router>
    );
}

export default App;
