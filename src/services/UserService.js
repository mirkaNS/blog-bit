
import { URL_DATA_USERS } from "../shared/dataUsers"

import { User } from "../entities/User"


const fetchUsers = () => {

    return fetch(URL_DATA_USERS)
        .then((response) => {
            return response.json();
        })
        .then((user) => {

            const userList = user.map((user) => {
                return new User(user.id, user.name, user.username, user.email, user.address, user.company, user.phone);
            });
            // console.log(postList)
            return userList;
        });

}
const fetchUser = (id) => {

    return fetch(URL_DATA_USERS + "/" + id)
        .then((response) => {
            return response.json();
        })
        .then((user) => {

            return new User(user.id, user.name, user.username, user.email, user.address, user.company, user.phone);

        });

}


export {
    fetchUsers,
    fetchUser
}
