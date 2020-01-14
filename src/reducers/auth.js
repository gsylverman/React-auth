import { AUTH_USER } from "../actions/types";
import axios from "axios";

const INITIAL_STATE = {
    auth: "",
    errorMessage: ""
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case AUTH_USER:
            const { email, password } = action.payload;
            console.log(email);
            console.log(password);
            axios.post("https://reqres.in/api/register", {
                email,
                password
            });
            return state;
        default:
            return state;
    }
}