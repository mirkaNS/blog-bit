import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-light">
            <h1 className="navbar-brand">BIT BLOG</h1>

            <ul className="nav justify-content-end">

                <li className="nav-item">
                    <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/authors">Authors</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
export { Header } 
