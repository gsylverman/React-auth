import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
    auth: "",
    errorMessage: ""
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case AUTH_USER:
                   
            return state;
        default:
            return state;
    }
}