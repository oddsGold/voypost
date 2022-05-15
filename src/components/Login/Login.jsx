import React from "react";
import {Field, Formik, Form} from "formik";
import {validateEmail, validatePassword} from "../../utils/validation";
import PasswordShowHide from "../../utils/PasswordShowHide";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Logo from "../../images/Logo.svg"
import {compareUsers, fetchUser} from "../user/redux/action";
import ErrorAuthenticated from "../error/ErrorAuthenticated";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Login = (props) => {

    if (props.authenticated) {
        return <Redirect to={"/"}/>
    }



    return (


        <div className="login-form">

            <ErrorAuthenticated />

            <div className="split left"></div>
            <div className="split right">
                <div className="centered">

                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>

                    <div className="form">
                        <div className="form-header">
                            <h1>Login</h1>
                        </div>

                        <Formik  initialValues={{
                            email: "",
                            password: ""
                        }} onSubmit={
                            async (values,{resetForm}) => {
                                await sleep(1000);
                                props.fetchUser(values);
                                props.compareUsers(JSON.stringify(values));
                                resetForm({values: ''});
                            }}
                        >
                            {({errors, touched, isValidating, isSubmitting}) => (
                                <Form>

                                    <label htmlFor="email" className="email">
                                        <p>Email</p>
                                        <Field id="email" validate={validateEmail} className="form-control" name="email" placholder="email"/>
                                        {errors.email && touched.email && <div className="video-errors">{errors.email}</div>}
                                    </label>
                                    <label htmlFor="password" className="password">
                                        <p>Password</p>
                                        <Field id="password" className="form-control" validate={validatePassword} name="password" component={PasswordShowHide}/>
                                        {errors.password && touched.password && <div className="video-errors">{errors.password}</div>}
                                    </label>

                                    <button type="submit" className="btn" disabled={isSubmitting}>Login</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    );
}

let mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated,
        error: state.user.error
    }
}

export default connect(mapStateToProps,{
    compareUsers,
    fetchUser
})(Login)