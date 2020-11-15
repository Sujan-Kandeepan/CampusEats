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
import './Settings.css';

export default class Settings extends React.Component {
    render() {
        let restaurants = require("./data/restaurant_data.json").restaurants;
        let reviews = require("./data/restaurant_review.json").reviews;
        let history = reviews
            .filter(r => r.username === this.props.existingUserInfo.username)
            .sort((r1, r2) => r1.time - r2.time)
            .map(r =>
                <div>
                    <p>
                        {r.time} minutes ago - left a review on&nbsp;
                        <strong>
                            {restaurants.find(rs => r.id === rs.id).name}
                        </strong>
                    </p>
                    <p>
                        <small>
                            {[...Array(r.rating).keys()].map(_ => <span>&#9733;</span>)}
                            &nbsp;-&nbsp;&ldquo;{r.comment}&rdquo;
                        </small>
                    </p>
                    <br />
                </div>);

        return (
            <React.Fragment>
                <Header></Header>
                <div id="acc-setup-page">
                    {/* <form> */}
                        <Link to="/" className="" id="go-to-main-page">
                            <i className="fas fa-arrow-left"></i>&ensp;Go to main page
                        </Link>
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
                            <div className="column is-5">
                                <h2 className="subtitle">Your History</h2>
                                {history.length === 0 && <p>Your history will appear here.</p>}
                                {history}
                            </div>
                        </div>
                    {/* </form> */}
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}