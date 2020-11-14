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
                <Header></Header>
                <div id="acc-setup-page">
                    <form action="submit">
                        <div class="columns level">
                            <div class="column is-8 level-left">
                                <h1 class="title" id="title">New Account Questionnaire</h1>
                            </div>
                            <div class="column is-4 level-right has-text-right">
                                <a class="prev-next" href="">
                                    <i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Previous Page
                                </a>
                                <a class="prev-next" href="">
                                    Next Page&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <p id="required">
                            <i class="fa fa-sm fa-asterisk" aria-hidden="true"></i> - Required option
                        </p>
                        <div class="columns is-mobile">
                            <div class="questions">
                                <UserSettings />
                            </div>
                        </div>
                        <div class="has-text-right" id="bottom-page-nav">
                            <a class="prev-next" href="">
                                <i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Previous Page
                            </a>
                            <a class="prev-next" href="">
                                Next Page&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}