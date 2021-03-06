import axios from "axios";

export const fetchUsers = ({ page }) =>
    axios
        .get("https://reqres.in/api/users", {
            params: { page },
        }, {
            timeout: 100,
        })
        .then((res) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err.response));

export const fetchById = ({ id }) =>
    axios
        .get("https://reqres.in/api/users", {
            params: { id },
        }, {
            timeout: 100,
        })
        .then((res) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err.response));
