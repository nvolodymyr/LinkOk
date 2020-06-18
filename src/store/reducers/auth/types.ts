import {
    AUTH_LOADING,
    SIGN_IN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
} from "../../types/user";
import User from "../../../models/user";

export interface AuthState {
    loading: boolean;
    user: null | User;
}

interface AuthLoadingAction {
    type: typeof AUTH_LOADING;
}

interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailAction {
    type: typeof SIGN_UP_FAIL;
}

interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS;
    payload: User;
}

interface SignInFailAction {
    type: typeof SIGN_IN_FAIL;
}

interface SignOutSuccessAction {
    type: typeof SIGN_OUT_SUCCESS;
}


export type AuthActions =
    | AuthLoadingAction
    | SignUpSuccessAction
    | SignUpFailAction
    | SignInSuccessAction
    | SignInFailAction
    | SignOutSuccessAction;