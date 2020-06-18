import {
    ARTICLES_FAIL,
    ARTICLES_LOADING,
    ARTICLES_STOP,
    ARTICLES_SUCCESS
} from '../../types/articles';
import Articles from "../../../models/articles";

export interface ArticlesState {
    loading: boolean;
    articles: Articles[];
}

interface ArticlesLoadingAction {
    type: typeof ARTICLES_LOADING;
}

interface ArticlesSuccessAction {
    type: typeof ARTICLES_SUCCESS;
    payload: Articles[];
}

interface ArticlesStopAction {
    type: typeof ARTICLES_STOP;
}

interface ArticlesFailAction {
    type: typeof ARTICLES_FAIL;
}

export type ArticlesAction =
  ArticlesLoadingAction
| ArticlesSuccessAction
| ArticlesStopAction
| ArticlesFailAction