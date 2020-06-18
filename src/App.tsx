import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import AllArticles from "./components/AllArticles/AllArticles";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import OneArticle from "./components/OneArticle/OneArticle";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


function App() {
    return (
            <div className="app">
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Router>
               <Nav/>
                <div className="mainContent">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/articles" component={AllArticles} />
                        <Route path="/articles/:id" component={OneArticle}/>
                        <Route path="/sign-in" exact component={SignIn} />
                        <Route path="/sign-up" exact component={SignUp} />
                    </Switch>
                </div>
                        </Router>
                    </PersistGate>
                </Provider>
            </div>
    );
}

export { App };
