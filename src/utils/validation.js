export const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

export const validatePassword = values => {
    let error = "";
    if (!values) {
        error = "Required";
    } else if (values.length < 3) {
        error = "Password must be 3 characters long.";
    }
    return error;
};


