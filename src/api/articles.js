import axios from "axios";
import { BASE_URL } from "../config";

export const readArticles = () => {
    return axios
        .get(`${BASE_URL}`)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
            throw new Error(error);
        });
};
