import React from "react";
import { ConnectedProps, connect } from "react-redux";
import {RootState} from "../../store";
import { Link } from "react-router-dom";
import './AllArticles.css';

const mapStateToProps = (state: RootState) => ({
    articles: state.articles.articles,
    user: state.auth.user
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const AllArticles = ({ articles }: PropsFromRedux) => {

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
