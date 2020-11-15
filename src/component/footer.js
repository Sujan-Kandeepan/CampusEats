/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return(
            <React.Fragment>
                
                 {/* Footer template from Bulma: https://bulma.io/documentation/layout/footer/ */}

                <footer className="footer">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-1">
                            <Link to="/">About</Link> 
                            </div>
                            <div className="column is-2">
                                <Link to="/">Privacy Policy</Link> 
                            </div>
                            <div className="column is-1">
                                <Link to="/">Help</Link> 
                            </div>
                            <div className="column is-6">
                            </div>
                            <div className="column is-2">
                                <Link to="/">Report a problem</Link> 
                            </div>
                        </div>
                    <p>
                        
                    </p>
                    </div>
                    </footer>
            </React.Fragment>
        )
    }
}