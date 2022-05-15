import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Content from "./components/layouts/components/Content";
import Login from "./components/Login/Login";
import NotFound from "./components/error/NotFound";
import "./style/index.scss"
import {connect} from "react-redux";
import {initializedSuccessApp} from "./components/settings/redux/actions";

function App(props) {

    useEffect(() => {
        props.initializedSuccessApp();
    },[])

    return (
        <Router>

            <Route path="/login" component={Login} />
            <Route exact path="/" component={Content} />
            <Route path="*" component={NotFound} />


        </Router>
    );
}

export default connect(null,{
    initializedSuccessApp
})(App)
