import { URL_DATA_POSTS } from "../shared/dataPosts"

import { Post } from "../entities/Post"

const fetchPosts = () => {
    return fetch(URL_DATA_POSTS)
        .then((response) => {
            return response.json();
        })
        .then((post) => {
            const postList = post.map((user) => {
                return new Post(user.id, user.userId, user.body, user.title);

            })

            return postList;
        });

}

export { fetchPosts }
