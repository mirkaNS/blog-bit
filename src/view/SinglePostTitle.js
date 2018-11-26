import React, { Fragment } from "react";
import { Link } from "react-router-dom"

const SinglePostTitle = () => {
    return (
        < Fragment>
            <h5>SINGLE POST TITLE</h5>
            <Link to="/Authors/SingleAuthor">Author Name</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr />
            <p>numberOfPosts from the same Author</p>
            <ul>
                <li> <Link to="#">Title 10-Lorem ipsum dolor</Link> </li>
                <li>  <Link to="#">Title 11-quis nostrud </Link></li>
                <li>  <Link to="#">Title 12-officia deserunt </Link></li>
            </ul>

        </Fragment>
    )
}
export { SinglePostTitle }
