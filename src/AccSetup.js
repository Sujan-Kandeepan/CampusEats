/*

There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.

*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import './AccSetup.css';

export default class AccSetup extends React.Component {
    constructor(props) {
        super(props);
    }

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
                                <h2 class="subtitle">Personal Information</h2>
                                <div class="columns is-mobile">
                                    <div class="column is-8">
                                        <div class="field">
                                            <label class="label">
                                                Full Name <i class="fa fa-sm fa-asterisk" aria-hidden="true"></i>
                                            </label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="John Doe" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-4">
                                        <div class="field">
                                            <label class="label">Age</label>
                                            <div class="control">
                                                <input class="input" type="number" min="0" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column is-6">
                                        <div class="field">
                                            <label class="label">Gender</label>
                                            <div class="control">
                                                <input class="input" type="text" list="gender"
                                                    placeholder="Type or select an option" />
                                                <datalist id="gender">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-6">
                                        <div class="field">
                                            <label class="label">Ethnicity</label>
                                            <div class="control">
                                                <input class="input" type="text" list="ethnicity"
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
                                <div class="columns">
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label">
                                                Campus Name <i class="fa fa-sm fa-asterisk" aria-hidden="true"></i>
                                            </label>
                                            <div class="control">
                                                <input class="input" type="text" list="university"
                                                    placeholder="Type or select an option" />
                                                <datalist id="university">
                                                    <option>McMaster University</option>
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="subtitle">Preferences and Spending on Food</h2>
                                <div class="columns">
                                    <div class="column is-6">
                                        <div class="field">
                                            <label class="label">
                                                Preferences
                                            </label>
                                            <div class="control">
                                                <input class="input" type="text"
                                                    placeholder="Chinese, savoury, mild, etc." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-6">
                                        <div class="field">
                                            <label class="label">
                                                Dietary Restrictions
                                            </label>
                                            <div class="control">
                                                <input class="input" type="text" list="dietary-restrictions"
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
                                <div class="columns">
                                    <div class="column is-4">
                                        <div class="field">
                                            <label class="label">
                                                Weekly Budget ($)
                                            </label>
                                            <div class="control">
                                                <input class="input" type="number" min="0" placeholder="1.23" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-8 level">
                                        <div class="field">
                                            <label class="label">
                                                Frequency of Spending on Food
                                            </label>
                                            <div class="control">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <input class="input" type="number" min="0" placeholder="" />
                                                    </div>
                                                    &ensp;time(s) per&ensp;
                                                    <div class="level-right">
                                                        <div class="select">
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