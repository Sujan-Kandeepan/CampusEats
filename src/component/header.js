

/*
This is the default react class given by the react documentation
*/

import React from "react";
import logo from './../img/logo.png';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <nav className="navbar" role="navigation">
                    <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src={logo} width="90" height="70" />
                    </a>
                    <a role="button" className="navbar-burger burger" data-target="simpleNav">
                    </a>
                    </div>
                 
                    <div id="simpleNav" className="navbar-menu"/>
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
                            <a className="button is-primary">
                                Sign in/Log in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}