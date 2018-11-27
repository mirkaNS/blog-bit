import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import { NameSurname } from "./SingleAuthor/NameSurname";
import { Address } from "./SingleAuthor/Address";
import { Company } from "./SingleAuthor/Company";
import { fetchUser } from "../services/UserService"

class SingleAuthor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
        }
    }
    componentDidMount() {
        fetchUser(this.props.match.params.id)
            .then((response) =>
                this.setState({
                    user: response
                }));
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                <Link to="/authors">{'<'}All Authors</Link>
                <NameSurname data={this.state.user} />
                <Address data={this.state.user.address} />
                <Company data={this.state.user.company} />
            </Fragment >
        )
    }
}

export { SingleAuthor }