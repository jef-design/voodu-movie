import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../redux/action/tvshowAction";
import Modal from "react-modal";

function Episodes() {
    const { seasonnumber } = useParams();
    const {id} = useParams();
    const dispatch = useDispatch();
    const episodes = useSelector(state => state.fetchTVShows.episodes);
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    console.log("episodes", episodes);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "8",
            padding: "0",
            overflow: "hidden",
        },
    };
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        dispatch(fetchEpisodes(seasonnumber,id));
    }, [dispatch,seasonnumber,id]);

    return (
        <div className="episode__wrapper">
            episode
            {episodes.map((e, i) => {
                const { episode_number, name, overview, still_path } = e;
                return (
                    <div className="episode__container" key={i}>
                        <div className="episode__stillpath">
                            <img src={POSTERPATH_URL + still_path} alt={name} />
                            <i
                                onClick={openModal}
                                className="bx bx-play-circle play__button"
                            ></i>
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <iframe
                                className="iframe__wrapper"
                               
                                src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${seasonnumber}&e=${episode_number}`}
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="allowfullscreen"
                            ></iframe>
                        </Modal>
                        <div>
                            <h3>Episode {episode_number}</h3>
                            <h4>{name}</h4>
                            <p>{overview}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Episodes;
