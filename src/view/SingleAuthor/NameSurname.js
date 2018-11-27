import React, { Fragment } from 'react';

import "./NameSurname.css"

const NameSurname = (props) => {
    console.log(props.data)
    return (
        <Fragment>
            <h5>Single Author</h5>

            <li className="list-group-item clear-fix">
                <img src="https://via.placeholder.com/250" alt="img1" />
                <div className="new">
                    <h6>{props.data.name}</h6>
                    <p>username:{props.data.username}</p>
                    <p>email:{props.data.email}</p>
                    <p>phone:{props.data.phone}</p>
                </div>
            </li>

        </Fragment>
    )
}
export { NameSurname }