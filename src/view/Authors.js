import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/UserService"

class Authors extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: [],
        }
    }
    componentDidMount() {
        fetchUsers()
            .then((response) => this.setState({
                userList: response
            }))
    }
    render() {
        const AuthorsName = (props) => {
            const listName = props.list.map((user, i) => {
                return (
                    <li className="list-group-item" key={i} >
                        <Link to={"/authors/" + user.id}>{user.name} (NumberOfPosts)</Link>
                    </li>)
            })
            return listName;
        }
        const NumberOfAuthors = (props) => {
            return props.number.length;
        }
        return (
            <Fragment>
                <h5>AUTHORS (<NumberOfAuthors number={this.state.userList} />)</h5>
                <ul className="list-group list-group-flush">
                    <AuthorsName list={this.state.userList} />
                </ul>
            </Fragment >
        )
    }
};

export { Authors }
