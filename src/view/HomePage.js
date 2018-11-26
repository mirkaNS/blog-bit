import React, { Fragment } from "react";
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <Fragment>
            <h5>POSTS</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link to="/Home/SinglePostTitle">Title 1</Link>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</p></li>
                <li className="list-group-item"><Link to="#">Title 2</Link>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</p></li>
                <li className="list-group-item">
                    <Link to="#">Title 3</Link>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</p></li>
                <li className="list-group-item">
                    <Link to="#">Title 4</Link>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</p></li>
            </ul>
        </Fragment>
    )
}

export { HomePage }


