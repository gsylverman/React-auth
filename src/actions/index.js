import { AUTH_USER } from "./types";
import axios from "axios";

function someFunction(email, password) {
    return {
        type: AUTH_USER,
        payload: {
            email: email,
            password: password
        }
    };
};

export const signup = ({ email, password }) => {

    return dispatch => {
        axios.post("https://reqres.in/api/register", {
            email,
            password
        });
        dispatch(someFunction(email, password));
    }
};