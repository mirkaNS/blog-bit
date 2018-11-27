import React, { Fragment } from "react";

import "./Address.css"

const Address = (props) => {
    if (!props.data) {
        return null
    }
    return (
        <Fragment>
            <li className="list-group-item clear-fix">
                <div className="address">
                    <h6>Address</h6>
                    <p>street: {props.data.street}</p>
                    <p>city: {props.data.city}</p>
                    <p>zipcode: {props.data.zipcode}</p>
                </div>
                <iframe src={"http://maps.google.com/maps?q=" + props.data.geo.lat + "," + props.data.geo.lng + '&z=5&output=embed'} width="300" height="300" frameBorder="0"></iframe>
            </li>


        </Fragment >
    )
}
export { Address }