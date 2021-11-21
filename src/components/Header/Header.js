import React from "react";
import "./Header.scss"
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <div className={"Header"}>
            <Link to="/" className={"nav-link"}>Strona Główna</Link>
            <Link to="/kontakt" className={"nav-link"}>Kontakt</Link>
            <Link to="/mapa" className={"nav-link"}>Mapa</Link>
        </div>
    )
}