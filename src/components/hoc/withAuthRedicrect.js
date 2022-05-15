import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedicrect = (state) => {
    return {
        authenticated: state.user.authenticated
    }
}

export const withAuthRedirect = (Component) => {
    function RedirectComponent (props) {
        if (!props.authenticated) return <Redirect to={"/login"}/>

        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedicrect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}