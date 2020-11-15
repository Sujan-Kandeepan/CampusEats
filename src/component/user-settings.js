/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Redirect } from 'react-router-dom';
import "./user-settings.css";

export default class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.existingUserInfo || {
            fullName: "",
            age: 0,
            gender: "",
            ethnicity: "",
            campusName: "",
            preferences: "",
            dietaryRestrictions: "",
            weeklyBudget: 0,
            spendingAmount: 0,
            spendingPer: "week"
        };

        this.state.modalOpen = false;
        this.state.accChangeSuccessful = false;
        this.setStateGlobal = this.setStateGlobal.bind(this);
        this.confirmButton = this.confirmButton.bind(this);
    }

    confirmButton() {
        this.setState({
            modalOpen: true

        });
    }

    setStateGlobal() {
        let temp = { ...this.state };
        delete temp.modalOpen;
        delete temp.accChangeSuccessful;
        this.props.updateUserInfo(temp);
        if (this.props.changeLoginState) this.props.changeLoginState(true);
        this.setState({
            accChangeSuccessful: true,
        })
    }

    render() {
        console.log("accChangeSuccessful", this.state.accChangeSuccessful)
        return (
            <React.Fragment>

                { this.state.accChangeSuccessful ? <Redirect to='/' /> : "" }
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
                        <button className="button is-success" onClick={() => this.setStateGlobal()} >Ok, got it! </button>
                        </footer>
                    </div>
                    </div>) : ""
                }

                <h2 className="subtitle">Personal Information</h2>
                <div className="columns is-mobile">
                    <div className="column is-8">
                        <div className="field">
                            <label className="label">
                                Full Name <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i>
                            </label>
                            <div className="control">
                                <input required className="input" type="text"
                                    placeholder="John Doe" value={this.state.fullName}
                                    onChange={event => this.setState({ fullName: event.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="field">
                            <label className="label">Age</label>
                            <div className="control">
                                <input className="input" type="number" min="0"
                                    placeholder="" value={this.state.age}
                                    onChange={event => this.setState({ age: parseInt(event.target.value) })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Gender</label>
                            <div className="control">
                                <input className="input" type="text" list="gender"
                                    placeholder="Type or select an option" value={this.state.gender}
                                    onChange={event => this.setState({ gender: event.target.value })} />
                                <datalist id="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Ethnicity</label>
                            <div className="control">
                                <input className="input" type="text" list="ethnicity"
                                    placeholder="Type or select an option" value={this.state.ethnicity}
                                    onChange={event => this.setState({ ethnicity: event.target.value })} />
                                <datalist id="ethnicity">
                                    <option>Aboriginal</option>
                                    <option>Arab/West Asian</option>
                                    <option>Black</option>
                                    <option>Caucasian</option>
                                    <option>East Asian</option>
                                    <option>Hispanic/Latino</option>
                                    <option>South Asian</option>
                                    <option>Other</option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12">
                        <div className="field">
                            <label className="label">
                                Campus Name <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i>
                            </label>
                            <div className="control">
                                <input required className="input" type="text" list="university"
                                    placeholder="Type or select an option" value={this.state.campusName}
                                    onChange={event => this.setState({ campusName: event.target.value })} />
                                <datalist id="university">
                                    <option>McMaster University</option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="subtitle">Preferences and Spending on Food</h2>
                <div className="columns">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">
                                Preferences
                            </label>
                            <div className="control">
                                <input className="input" type="text"
                                    placeholder="Chinese, savoury, mild, etc." value={this.state.preferences}
                                    onChange={event => this.setState({ preferences: event.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">
                                Dietary Restrictions
                                            </label>
                            <div className="control">
                                <input className="input" type="text" list="dietary-restrictions"
                                    placeholder="Type or select an option" value={this.state.dietaryRestrictions}
                                    onChange={event => this.setState({ dietaryRestrictions: event.target.value })} />
                                <datalist id="dietary-restrictions">
                                    <option>Halal</option>
                                    <option>Kosher</option>
                                    <option>No beef</option>
                                    <option>No pork</option>
                                    <option>Vegan</option>
                                    <option>Vegetarian</option>
                                    <option>Other</option>
                                    <option>None</option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-4">
                        <div className="field">
                            <label className="label">
                                Weekly Budget ($)
                                            </label>
                            <div className="control">
                                <input className="input" type="number" min="0"
                                    placeholder="1.23" value={this.state.weeklyBudget}
                                    onChange={event => this.setState({ weeklyBudget: parseInt(event.target.value) })} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-8 level">
                        <div className="field">
                            <label className="label">
                                Frequency of Spending on Food
                                            </label>
                            <div className="control">
                                <div className="level is-mobile">
                                    <div className="level-left">
                                        <input className="input" type="number" min="0"
                                            placeholder="" value={this.state.spendingAmount}
                                            onChange={event => this.setState({ spendingAmount: parseInt(event.target.value) })} />
                                    </div>
                                    &ensp;time(s) per&ensp;
                                    <div className="level-right">
                                        <div className="select">
                                            <select value={this.state.spendingPer}
                                                onChange={event => this.setState({ spendingPer: event.target.value })}>
                                                <option>day</option>
                                                <option>week</option>
                                                <option>month</option>
                                                <option>year</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12">
                    <button className="button is-primary is-fullwidth" onClick={this.confirmButton}>Confirm</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}