import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedicrect";

const NotFound = () => {

    return (
        <></>
    );
}

export default compose(
    connect(null, {

    }),
    withAuthRedirect
)(NotFound);