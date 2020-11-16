

/*
This is the default react class given by the react documentation
*/

import React from "react";
import logo from './../img/logo.png';
import { Link, Redirect } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                {window.state.loginState || this.props.accSetup || this.props.login || <Redirect to="/accSetupFirst" />}
                <nav className="navbar" role="navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src={logo} alt="logo" width="90" height="70" />
                        </Link>
                        {/* <Link to="/" role="button" className="navbar-burger burger" data-target="simpleNav">
                        </Link> */}
                    </div>
                    <div className="navbar-start">
                        {this.props.id &&
                            <React.Fragment>
                                <Link to={"/map?id=" + this.props.id} className="navbar-item">Map</Link>
                                <Link to={"/details?id=" + this.props.id} className="navbar-item">Details</Link>
                                <Link to={"/review?id=" + this.props.id} className="navbar-item">Review</Link>
                            </React.Fragment>
                        }
                    </div>
                    <div className="navbar-end">
                        {window.state.loginState
                            ? <Link to="/logout" className="navbar-item" >Log Out</Link>
                            : this.props.accSetup
                                ? <Link to="/login" className="navbar-item">Login (Existing User)</Link>
                                : <Link to="/accSetupFirst" className="navbar-item">Sign Up (New User)</Link>
                        }
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}