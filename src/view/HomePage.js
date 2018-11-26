import React, { Fragment } from "react";

import { SinglePost } from "./SinglePost"

const HomePage = (props) => {
    console.log(props)

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


