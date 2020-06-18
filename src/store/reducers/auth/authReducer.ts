import {
    AUTH_LOADING,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_OUT_SUCCESS,
} from "../../types/user";
import { AuthState, AuthActions } from "./types";

const initialState: AuthState = {
    loading: false,
    user: null,
};

export default function (state = initialState, action: AuthActions) {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                loading: false,
            };
        default:
            return state;
    }
}
