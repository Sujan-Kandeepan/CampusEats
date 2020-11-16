

/*
This is the default react class given by the react documentation
*/

import React from "react";
import logo from './../img/logo.png';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar" role="navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src={logo} alt="logo" width="90" height="70" />
                        </Link>
                        <Link to="/" role="button" className="navbar-burger burger" data-target="simpleNav">
                        </Link>
                    </div>
                    {!this.props.showMinimal &&
                        <React.Fragment>
                            <div id="simpleNav" className="navbar-menu" />
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item" >Discover</Link>
                                <Link to="/" className="navbar-item">Nearby</Link>
                                <Link to="/review" className="navbar-item">Review</Link>
                                <Link to="/review" className="navbar-item">Share</Link>
                            </div>
                            <div>
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <div className="buttons">
                                            <Link className="button is-primary" to="/login">
                                                Sign in/Log in
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </nav>
            </React.Fragment>
        )
    }
}