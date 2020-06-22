import React, { useEffect } from "react";
import { ConnectedProps, connect } from "react-redux";
import {RootState} from "../../store";
import { Link } from "react-router-dom";
import './AllArticles.css';
import { getArticles } from "../../store/actions/getArticles";

const mapStateToProps = (state: RootState) => ({
    articles: state.articles.articles,
    user: state.auth.user
});

const mapDispatchToProps = (dispatch: Function) => ({
    getArticles: () => dispatch(getArticles()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const AllArticles = ({getArticles, articles}: PropsFromRedux) => {

    useEffect(() => {
        getArticles();
    },[getArticles]);

    const  listItem = articles.map((elem) =>
    <li key={elem.id}>
    <Link to={`/articles/${elem.id}`}>
     {elem.title}
    </Link>
        </li>);
return (
    <div><ul className="articles-container">
        {listItem}
    </ul></div>
);
};
export default connector(AllArticles);
