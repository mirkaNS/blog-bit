import React, { Fragment } from 'react';

import "./NameSurname.css"

const NameSurname = () => {
    return (
        <Fragment>
            <h5>Single Author</h5>

            <li className="list-group-item clear-fix">
                <img src="https://via.placeholder.com/250" alt="img1" />
                <div className="new">
                    <h6>Name Surname</h6>
                    <p>username:my_cool_username</p>
                    <p>email:my_cool_email</p>
                    <p>phone:14451782308-876</p>
                </div>
            </li>

        </Fragment>
    )
}
export { NameSurname }