/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* Footer template from Bulma: https://bulma.io/documentation/layout/footer/ */}
                <footer className="footer">
                    <div className="content">
                        <div className="columns is-vcentered" style={{ height: "30px", padding: "10px 0" }}>
                            {/* <Link to="/">About</Link> */}
                            {/* <Link to="/">Privacy Policy</Link>  */}
                            <Link to="/contactSupport" style={{ marginLeft: "auto" }}>Contact Support</Link>
                            {/* <Link to="/">Report a problem</Link> */}
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}