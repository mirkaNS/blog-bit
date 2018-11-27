import React, { Fragment } from "react";

const Company = (props) => {
    if (!props.data) {
        return null
    }
    return (
        <Fragment>
            <li className="list-group-item">
                <h6>Company</h6>
                <p>name: {props.data.name}</p>
                <p>quotes: {props.data.catchPhrase}</p>

            </li>
        </Fragment>
    )
}
export { Company }