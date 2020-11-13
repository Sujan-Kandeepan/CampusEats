/*
Template is based heavily off of bulma examples.
Bulma extensions were also used - specifically, the divider: https://wikiki.github.io/layout/divider/
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import './css/bulma-divider.min.css'; //from the Bulma extensions 

export default class ContactSupport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <div class="container">
                <br/>
                <h2 class="title is-2">Support</h2>
                <h4 class="title is-4">Support message</h4>
                <b>Submit a support ticket</b>
                <br/><br/>
                <textarea class="textarea" placeholder="What you need support with."></textarea>
                <div class="column is-4 is-offset-4"><button class="button is-primary is-fullwidth">Submit</button></div>
              
                
                <div class="is-divider" data-content="OR"></div>
                </div>
                <div class="container">
                <h4 class="title is-4">Phone</h4>
                <b>Call Number:</b> 
                <br/><br/>
                 1 - 647 - FAK - NUMB
                <br/>
                </div>

                <br/><br/>


                <Footer></Footer>
            </React.Fragment>
        )
    }
}