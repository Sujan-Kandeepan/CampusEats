/*

There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.

*/

import React from "react";
import { Link } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import UserSettings from './component/user-settings';
import './AccSetup.css';

export default class AccSetup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div id="acc-setup-page">
                    <form>
                        <div className="columns level">
                            <div className="column is-8 level-left">
                                <h1 className="title" id="title">New Account Questionnaire</h1>
                            </div>
                            <div className="column is-4 level-right has-text-right">
                                <Link className="prev-next" to="/">
                                    <i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Previous Page
                                </Link>
                                <Link className="prev-next" to="/">
                                    Next Page&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <p id="required">
                            <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i> - Required option
                        </p>
                        <div className="columns is-mobile">
                            <div className="questions">
                                <UserSettings updateUserInfo={this.props.updateUserInfo} existingUserInfo={this.props.existingUserInfo} />
                            </div>
                        </div>
                        <div className="has-text-right" id="bottom-page-nav">
                            <Link className="prev-next" to="/">
                                <i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Previous Page
                            </Link>
                            <Link className="prev-next" to="/">
                                Next Page&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}