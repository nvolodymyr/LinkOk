import React from "react";
import { ConnectedProps, connect } from "react-redux";
import {RootState} from "../../store";
import './OneArticle.css'
import Articles from "../../models/articles";

const mapStateToProps = (state: RootState) => ({
    articles: state.articles.articles,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function  OneArticle ({articles, match}:PropsFromRedux & any){
 // @ts-ignore
    const listItem = articles.find((elem: Articles) =>elem.id===+match.params.id);
    return (
        <div>
            <div className="abstract">{listItem.abstract}</div>
            <button className="ui button more"><a href={listItem.url}>Click here</a></button>
        </div>
    );
    
}

export default connector(OneArticle);

