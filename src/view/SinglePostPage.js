import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { PostTitle } from "./PostTitle";
import { PostsList } from "./PostsList";

const SinglePostPage = () => {
    return (
        < Fragment>
            <PostTitle />
            <PostsList />
        </Fragment >
    )
}
export { SinglePostPage }
