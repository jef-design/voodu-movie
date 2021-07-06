import React from 'react'
import Banner from '../Banner'
import Movies from '../main/Movies/Movies';
import { Helmet } from "react-helmet";

function Home() {
    return (
        <div>
            <Helmet>
                <title> Voodu. | Millions of movies, TV shows and people to discover.</title>
            </Helmet>
           
            <Banner/>
            <Movies/>
        </div>
    )
}

export default Home
