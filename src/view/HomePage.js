import React, { Fragment, Component } from "react";

import { SinglePost } from "./SinglePost"

import { fetchPosts } from "../services/PostService"

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postList: [],
        }
    };

    componentDidMount() {
        fetchPosts()
            .then((response) => this.setState({
                postList: response
            }));
    }
    render() {
        return (<Fragment>

            <h5>POSTS</h5>
            <ul className="list-group list-group-flush">
                <SinglePost list={this.state.postList} />
            </ul>

        </Fragment>)
    }
}


export { HomePage }


