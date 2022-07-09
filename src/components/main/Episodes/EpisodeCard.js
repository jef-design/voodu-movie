import React from "react";
import Modal from "react-modal";

function EpisodeCard({
    still_path,
    name,
    overview,
    season_number,
    episode_number,
    i,
    id
}) {
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "50000",
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

    return (
        <div className="episode__container" key={i}>
            <div className="episode__stillpath">
                <img src={POSTERPATH_URL + still_path} alt={name} />
                <i
                    onClick={openModal}
                    className="bx bx-play-circle play__button"
                ></i>
            </div>
            <div className="episode__info">
                <h3 className="episode__number">S0{season_number} : E0{episode_number}</h3>
                <h4>{name}</h4>
                <p>{overview}</p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <button className="modal__close" onClick={closeModal}>
                   close
                 </button>
                <iframe
                    title="stream"
                    className="iframe__wrapper"
                    src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season_number}&e=${episode_number}`}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}
                ></iframe>
            </Modal>
        </div>
    );
}

export default EpisodeCard;
