import React, { Fragment } from 'react';

const NameSurname = () => {
    return (
        <Fragment>
            <h5>Single Author</h5>

            <li className="list-group-item">
                <img src="https://via.placeholder.com/150" alt="img1" />
                <h6>Name Surname</h6>
                <p>username:my_cool_username</p>
                <p>email:my_cool_email</p>
                <p>phone:14451782308-876</p>
            </li>

        </Fragment>
    )
}
export { NameSurname }