import { URL_DATA_POSTS } from "../shared/dataPosts"
import { URL_DATA_USERS } from "../shared/dataUsers"

const fetchUserData = () => {

    return fetch(URL_DATA_USERS)
        .then((response) => {
            return response.json();
        })
}
const fetchPostData = () => {

    return fetch(URL_DATA_POSTS)
        .then((response) => {
            return response.json();
        })
}

export { fetchUserData, fetchPostData }