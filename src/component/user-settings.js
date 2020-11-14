/*
This is the default react class given by the react documentation
*/

import React from "react";
import "./user-settings.css";

export default class UserSettings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="subtitle">Personal Information</h2>
                <div className="columns is-mobile">
                    <div className="column is-8">
                        <div className="field">
                            <label className="label">
                                Full Name <i className="fa fa-sm fa-asterisk" aria-hidden="true"></i>
                            </label>
                            <div className="control">
                                <input className="input" type="text" placeholder="John Doe" />
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="field">
                            <label className="label">Age</label>
                            <div className="control">
                                <input className="input" type="number" min="0" placeholder="" />
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
                                    placeholder="Type or select an option" />
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
                                    placeholder="Type or select an option" />
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
                                <input className="input" type="text" list="university"
                                    placeholder="Type or select an option" />
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
                                    placeholder="Chinese, savoury, mild, etc." />
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
                                    placeholder="Type or select an option" />
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
                                <input className="input" type="number" min="0" placeholder="1.23" />
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
                                        <input className="input" type="number" min="0" placeholder="" />
                                    </div>
                                                    &ensp;time(s) per&ensp;
                                                    <div className="level-right">
                                        <div className="select">
                                            <select>
                                                <option>day</option>
                                                <option selected>week</option>
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
            </React.Fragment>
        )
    }
}