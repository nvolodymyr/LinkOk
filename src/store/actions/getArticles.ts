import {
    ARTICLES_FAIL,
    ARTICLES_LOADING,
    ARTICLES_STOP,
    ARTICLES_SUCCESS
} from '../types/articles';
import { readArticles } from "../../api/articles";
import { AppThunk } from "../index";

export const getArticles = (): AppThunk => (dispatch) => {
    dispatch({ type: ARTICLES_LOADING });
    return readArticles()
        .then((articles) => {
            dispatch({ type: ARTICLES_SUCCESS, payload: articles });
        })
        .catch(() => {
            dispatch({ type: ARTICLES_FAIL });
        })
        .finally(() => {
            dispatch({ type: ARTICLES_STOP });
        });
};


