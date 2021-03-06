import React from "react";
import tmdblogo from '../../../assets/images/tmdb.svg'

function Footer() {
    return (
        <React.Fragment>
            <div className="footer-top helper">
                <h1>
                    Voodu –{" "}
                    <span>Watch free movies and tv series online anywhere</span>
                </h1>
                <p>
                    Voodu was an movies file streaming website that hosted links
                    and embedded videos, allowing users to stream or download
                    movies and TV shows for free. Voodu was described as "one of
                    the world’s biggest streaming movies and tv shows websites".
                </p>
            </div>
            <footer className="footer">
                <div className="footer-bottom helper">
                    <div>
                        <p>
                            Voo<span>du.</span>{" "}
                        </p>
                        <div className="footer__tmdb">
                            <p>Powered by</p>
                            <img src={tmdblogo} alt="tmdblogo" />
                        </div>
                        <ul className="footer__menu">
                            <li>Donation</li>
                            <li>Privacy Policy</li>
                            <li>Help</li>
                        </ul>
                        
                    </div>
                    <div className="footer__copy">
                    <p>&copy; 2020 Voodu</p>
                    <p>Created by: Jeff Bermejo</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
