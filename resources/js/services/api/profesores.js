const { axios } = window;

const API_URL = process.env.BASE_URL || process.env.VUE_APP_BASE_URL || "";

export const fetchProfesores = ({ page }) =>
    axios
        .get(
            API_URL + "/api/v1/profesores",
            {
                params: { page },
            },
            {
                timeout: 3000,
            }
        )
        .then((res) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err.response));

export const createProfesor = ({ first_name, last_name, email }) =>
    axios
        .post(
            API_URL + "/api/v1/profesores",
            {
                first_name,
                last_name,
                email,
            },
            {
                timeout: 3000,
            }
        )
        .then((res) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err.response));

export const deleteProfesor = ({ id }) =>
    axios
        .delete(
            API_URL + "/api/v1/profesores/" + id,
            {},
            {
                timeout: 3000,
            }
        )
        .then((res) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err.response));
