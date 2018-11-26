import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const Authors = () => {
    return (
        <Fragment>
            <h5>AUTHORS(numberOfAuthors)</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link to="/Authors/SingleAuthor">Name Surname (NumberOfPosts)</Link>
                </li>
                <li className="list-group-item">
                    <Link to="#">Name Surname (NumberOfPosts)</Link>
                </li>
                <li className="list-group-item">
                    <Link to="#">Name Surname (NumberOfPosts)</Link>
                </li>
                <li className="list-group-item">
                    <Link to="#">Name Surname (NumberOfPosts)</Link>
                </li>
                <li className="list-group-item">
                    <Link to="#">Name Surname (NumberOfPosts)</Link>
                </li>

            </ul>
        </Fragment>
    )
}
export { Authors }
