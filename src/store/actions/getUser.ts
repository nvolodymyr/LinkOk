import { AUTH_LOADING,
    SIGN_IN_FAIL,SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAIL,SIGN_UP_SUCCESS,
    } from '../types/user';
import { signUp as registration, signIn as login } from  '../../api/user';
import { AppThunk } from "../index";


export const signUp = (credential: any): AppThunk<Promise<void | { err: any }>> => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
try {
    await registration(credential.email, credential.password);
    dispatch({ type: SIGN_UP_SUCCESS });
} catch (err) {
    dispatch({ type: SIGN_UP_FAIL });
    return { err: err.response.data };
}};

export const signIn = (
    credential: any
): AppThunk<Promise<void | { err: any }>> => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        await login(credential.email, credential.password).then((response) => {
            dispatch({ type: SIGN_IN_SUCCESS, payload: response });
        });
    } catch (err) {
        dispatch({ type: SIGN_IN_FAIL });
        return { err: err.response.data };
    }
};

export  const signOut = (): AppThunk => (dispatch) => {
dispatch({type: AUTH_LOADING});
dispatch({type: SIGN_OUT_SUCCESS});
}
