/*
Template is based heavily off of bulma examples.
Bulma extensions were also used - specifically, the divider: https://wikiki.github.io/layout/divider/
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import { Redirect } from 'react-router-dom';
import './css/bulma-divider.min.css'; //from the Bulma extensions 

export default class ContactSupport extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            submissionSuccessful: false
        }
    }


    render() {
        return(
            <React.Fragment>
                <Header></Header>
                { this.state.submissionSuccessful ? <Redirect to='/' /> : "" }
                
                {/* Bulma Header code template: https://bulma.io/documentation/components/modal/ */}
                { this.state.modalOpen ? (<div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">Notification</p>
                        
                        </header>
                        <section className="modal-card-body">
                            <br/>
                        <h4 className="title is-4">Submission successful</h4>
                        <br/>
                        </section>
                        <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => this.setState({ submissionSuccessful: true })} >Ok, got it! </button>
                        </footer>
                    </div>
                    </div>) : ""
                }
                
                <div className="container">
                <br/>
                <h2 className="title is-2">Support</h2>
                <h4 className="title is-4">Support message</h4>
                <b>Submit a support ticket</b>
                <br/><br/>
                <textarea className="textarea" placeholder="What you need support with."></textarea>
                <div className="column is-4 is-offset-4"><button className="button is-primary is-fullwidth" onClick={() => this.setState({ modalOpen: true })}>Submit</button></div>
              
                
                <div className="is-divider" data-content="OR"></div>
                </div>
                <div className="container">
                <h4 className="title is-4">Phone</h4>
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