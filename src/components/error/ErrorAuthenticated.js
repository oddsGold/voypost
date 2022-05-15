import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";

const ErrorAuthenticated = (props) => {

    const [errorMsg,setErrorMsg] = useState(props.error);

    console.log(props.error);

    useEffect(()=>{
        setErrorMsg(props.error);
        },[props.error]);

    return (
        <>
            {errorMsg ? <div className="error-msg"><p>{props.error}</p></div> : <></>}
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        error: state.user.error
    }
}

export default compose(
    connect(mapStateToProps, {

    }),
)(ErrorAuthenticated);