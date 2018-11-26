import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { SinglePost } from "./SinglePost"

const HomePage = () => {
    return (
        <Fragment>
            <h5>POSTS</h5>
            <ul className="list-group list-group-flush">
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
            </ul>

        </Fragment>
    )
}

export { HomePage }


