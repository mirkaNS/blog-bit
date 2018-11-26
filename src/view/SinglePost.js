import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SinglePost = () => {
    return (<li className="list-group-item">
        <Link to="/home/singlePostPage">Title 1</Link>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</p>
    </li >)
}

export { SinglePost }