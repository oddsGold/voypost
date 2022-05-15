import React from 'react';

export default function Header(props) {


    return (
        <>
            <div className="menu">
                <a id="hamburger-icon" href="#" className="open-close-btn"><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <nav className="one">
                    <ul className="topmenu">

                        <li><a href="#">{props.initials ? props.initials : "U"}</a>
                            <ul className="submenu">
                                <li><a href="" onClick={props.logout}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    );
}
