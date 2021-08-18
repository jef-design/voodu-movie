import React,{useState} from "react";
import Search from "../../Search";
import { NavLink } from "react-router-dom";


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <React.Fragment>
            <div className="header helper">
                <div className="header__menu__con">
                <div className="title">
                    <h2>
                        Voo<span>du.</span>
                    </h2>
                </div>
                <nav>
                    <ul className="nav_menu" style={{transform: isOpen ? "translateX(0px)" : "" }}>
                        <NavLink exact onClick={()=> setIsOpen(!isOpen)} to="/" activeClassName="active">Home</NavLink>
                        <NavLink onClick={()=> setIsOpen(!isOpen)} to="/movie/popular" activeClassName="active">Movies</NavLink>
                        <NavLink onClick={()=> setIsOpen(!isOpen)} to="/tv/popular" activeClassName="active">TV Shows</NavLink>
                        <NavLink onClick={()=> setIsOpen(!isOpen)} to="/people" activeClassName="active">People</NavLink>
                    </ul>
                </nav>
                </div>
                <div className="header__right">
                <Search />
                {/* <i
                    onClick={() => setIsOpen(!isOpen)}
                    className="bx bx-search search_mobile"
                ></i> */}
                <i onClick={()=> setIsOpen(!isOpen)} className='bx bx-menu-alt-right burger'></i>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
