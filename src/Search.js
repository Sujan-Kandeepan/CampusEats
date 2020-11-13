/*
This is the default react class given by the react documentation
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                Search Page.
                <Footer></Footer>
            </React.Fragment>
        )
    }
}