/*

There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.

*/

import React from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import UserSettings from './component/user-settings';
import './Settings.css';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            showPasswordCreationError: false,
            showUsernameCreationError: false,
            signupFirstPartSuccessful: false
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(evt) {
        this.setState({
            username: evt.target.value,
            showUsernameCreationError: false
        })
    }

    onChangePassword(evt) {
        this.setState({
            password: evt.target.value,
            showPasswordCreationError: false
        })
    }

    handleSubmit() {
        if (this.props.username.length <= 5) {
            this.setState({
                showUsernameCreationError: true
            })
        }
        if (this.props.password.length <= 5) {
            this.setState({
                showPasswordCreationError: true
            })
        }
        if (this.props.username.length > 5 && this.props.password.length > 5) {
            this.props.updateUsername(this.props.username);
            this.props.updatePassword(this.props.password);
            this.setState({
                modalOpen: true,
                showUsernameCreationError: false,
                showPasswordCreationError: false
            });
        }
    }

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
                    {this.state.success && console.log("close")}
                    {this.state.success && <Redirect to='/settings' />}
                    {this.state.modalOpen &&
                        <div className="modal is-active">
                            <div className="modal-background"></div>
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title">Notification</p>
                                </header>
                                <section className="modal-card-body">
                                    <br />
                                    <h4 className="title is-4">Submission successful</h4>
                                    <br />
                                </section>
                                <footer className="modal-card-foot">
                                    <button className="button is-success" onClick={() => 
                                        this.setState({ success: true, modalOpen: false })
                                    }>
                                        Ok, got it!
                                    </button>
                                </footer>
                            </div>
                        </div>
                    }
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
                            <UserSettings existingUserInfo={this.props.existingUserInfo}
                                updateUserInfo={this.props.updateUserInfo} />
                        </div>
                        <div className="column is-5">
                            <h2 className="subtitle">Username and Password</h2>
                            <div className="columns">
                                <div className="column is-6">
                                    <input className="input" type="text" placeholder="Username" value={this.props.username}
                                        onChange={(evt) => this.props.updateUsername(evt.target.value)} />
                                    {this.state.showUsernameCreationError &&
                                        <p className="help is-danger">Username must be at least 6 characters</p>}
                                </div>
                                <div className="column is-6">
                                    <input className="input" type="password" placeholder="Password" value={this.props.password}
                                        onChange={(evt) => this.props.updatePassword(evt.target.value)} />
                                    {this.state.showPasswordCreationError &&
                                        <p className="help is-danger">Password must be at least 6 characters</p>}
                                </div>
                            </div>
                        <button className="button is-primary is-fullwidth" onClick={this.handleSubmit}>Submit</button>
                        <br />
                        <h2 className="subtitle">Your History</h2>
                        {history.length === 0 && <p>Your history will appear here.</p>}
                        {history}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}