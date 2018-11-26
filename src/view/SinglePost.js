import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ title, body }) => {
    return (<li className="list-group-item">
        <Link to="/home/singlePostPage">{title}</Link>
        <p> {body}</p>
    </li >)
}

export { SinglePost }