import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Main from "./Main";
import {withAuthRedirect} from "../../hoc/withAuthRedicrect";
import Header from "./Header";
import {logout} from "../../user/redux/action";
import Loading from "./Loading";

const Content = (props) => {

    return (
        <div className="content">
            <Loading>
                <Header
                    initials={props.initials}
                    logout={props.logout}/>
                <Main/>
            </Loading>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        initials: state.user.initials
    }
}

export default compose(
    connect(mapStateToProps, {
        logout
    }),
    withAuthRedirect
)(Content);
