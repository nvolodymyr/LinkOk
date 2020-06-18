import {ARTICLES_FAIL, ARTICLES_LOADING, ARTICLES_STOP, ARTICLES_SUCCESS} from '../../types/articles';
import {ArticlesAction, ArticlesState} from './types';

const initialState: ArticlesState = {
loading: false,
articles: [],
};

export default function ( state = initialState, action: ArticlesAction ): ArticlesState {
switch (action.type) {
    case ARTICLES_LOADING:
        return {
            ...state,
            loading: true,
        };
    case ARTICLES_SUCCESS:
        return {
            loading: false,
            articles: action.payload,
        }
    case ARTICLES_STOP:
        return {
            ...state,
            loading: false,
        }
    case ARTICLES_FAIL:
        return {
            ...state,
            loading: false,
        };
    default:
        return state;
}
}