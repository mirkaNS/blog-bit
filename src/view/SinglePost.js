import React from "react";
import { Link } from "react-router-dom";



const SinglePost = (props) => {

    const postList = props.list.map((post, i) => {

        return (<li className="list-group-item" key={i}>
            <Link to="/home/singlePostPage">{post.title}</Link>
            <p> {post.body} </p>
        </li >)
    })
    return postList;
}
export { SinglePost }