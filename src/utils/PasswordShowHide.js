import React, {useState} from "react";
import eye from "../images/eye.svg"

const PasswordShowHide = ({ field, form }) => {
    const [showHidePassword, changeShowHidePassword] = useState(false);
    const hasError = form.touched[field.name] && form.errors[field.name];

    return (
        <div className="input-container">
            <div className="eye" onClick={() => changeShowHidePassword(!showHidePassword)}>
                <img src={eye} alt="Eye"/>
            </div>
            <input
                type={showHidePassword ? "text" : "password"}
                {...field}
                className={hasError ? "input-error input-field" : "input-field"}
            />
        </div>
    );
};

export default PasswordShowHide;