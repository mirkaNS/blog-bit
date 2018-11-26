import React, { Fragment } from "react";

import "./Address.css"

const Address = () => {
    return (
        <Fragment>
            <li className="list-group-item clear-fix">
                <div className="address">
                    <h6>Address</h6>
                    <p>street:Nemanjina 4</p>
                    <p>city:Belgrade</p>
                    <p>zipcode:11000</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.0974996114508!2d20.41846498847007!3d44.81759190912273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6558b6274787%3A0xe52c77d7a63527ce!2z0JrQsNC70LTQuA!5e0!3m2!1ssr!2srs!4v1543232733778" width="300" height="300" frameBorder="0"></iframe>
            </li>


        </Fragment>
    )
}
export { Address }