import { AUTH_USER } from "./types";

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
        dispatch(someFunction(email, password));
    }
};