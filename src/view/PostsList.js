import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PostsList = () => {
    return (
        <Fragment>
            <li> <Link to="#">Title 10-Lorem ipsum dolor</Link> </li>
            <li>  <Link to="#">Title 11-quis nostrud </Link></li>
            <li>  <Link to="#">Title 12-officia deserunt </Link></li>
        </Fragment>
    )
}

export { PostsList }
