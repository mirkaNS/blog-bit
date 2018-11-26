import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { NameSurname } from "./SingleAuthor/NameSurname";
import { Address } from "./SingleAuthor/Address";
import { Company } from "./SingleAuthor/Company";

const SingleAuthor = () => {
    return (
        <Fragment>
            <Link to="/authors">{'<'}All Authors</Link>
            <NameSurname />
            <Address />
            <Company />


        </Fragment >
    )
}
export { SingleAuthor }