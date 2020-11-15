/*

There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.

*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import UserSettings from './component/user-settings';
import './Settings.css';

export default class Settings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div id="acc-setup-page">
                    <form action="submit">
                        <a href="/" className="" id="go-to-main-page">
                            <i className="fas fa-arrow-left"></i>&ensp;Go to main page
                        </a>
                        <h1 className="title" id="settings-history-header">
                            Account Settings and History
                        </h1>
                        <p id="required">
                            <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i> - Required option
                        </p>
                        <div className="columns is-mobile">
                            <div className="column is-7" id="settings">
                                <UserSettings existingUserInfo={this.props.existingUserInfo} updateUserInfo={this.props.updateUserInfo} />
                            </div>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}