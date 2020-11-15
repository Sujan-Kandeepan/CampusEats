/*

There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.

*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import UserSettings from './component/user-settings';
import './AccSetup.css';

export default class AccSetup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header showMinimal={true} ></Header>
                <div id="acc-setup-page">
                    {/* <form action="submit"> */}
                        <div className="columns level">
                            <div className="column is-8 level-left">
                                <h1 className="title" id="title">New Account Questionnaire</h1>
                            </div>
                        </div>
                        <p id="required">
                            <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i> - Required option
                        </p>
                        <div className="columns is-mobile">
                            <div className="questions">
                                <UserSettings updateUserInfo={this.props.updateUserInfo} 
                                existingUserInfo={this.props.existingUserInfo} 
                                changeLoginState={this.props.changeLoginState}
                                />
                            </div>
                        </div>
                    {/* </form> */}
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}