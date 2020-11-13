/*
This is the default react class given by the react documentation
*/

import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                
                 {/* Footer template from Bulma: https://bulma.io/documentation/layout/footer/ */}

                <footer className="footer">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-1">
                            <a href="">About</a> 
                            </div>
                            <div className="column is-2">
                                <a href="">Privacy Policy</a> 
                            </div>
                            <div className="column is-1">
                                <a href="">Help</a> 
                            </div>
                            <div className="column is-6">
                            </div>
                            <div className="column is-2">
                                <a href="">Report a problem</a> 
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