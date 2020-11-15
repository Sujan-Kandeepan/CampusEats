/*
Templated code from react-create-app.
Templated code from react router: https://reactrouter.com/web/guides/quick-start
*/
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Review from "./Review.js";
import Search from "./Search.js";
import Map from "./Map.js";
import Main from "./Main.js";
import Details from "./Details.js";
import AccSetup from "./AccSetup.js";
import Login from "./Login.js";
import Settings from "./Settings.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
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
      },
      loginState: false,
    }

    this.updateUserInfoFromApp = this.updateUserInfoFromApp.bind(this);
    this.changeLoginStateFromApp = this.changeLoginStateFromApp.bind(this);
  }

  updateUserInfoFromApp(state) {
    this.setState(state);
  }

  changeLoginStateFromApp(to) {
      this.setState({
        loginState: to
      });
  }

  componentDidUpdate() {
    window.state = this.state;
    // console.log(window.state);
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/map">
              <Map/>
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/accSetup">
              <AccSetup updateUserInfo={this.updateUserInfoFromApp} />
            </Route>
            <Route path="/settings">
              <Settings existingUserInfo={this.state.user} updateUserInfo={this.updateUserInfoFromApp} />
            </Route>
            <Route path="/login">
              <Login username={this.state.user.username} password={this.state.user.password}
                changeLoginState={this.changeLoginStateFromApp} loginState={this.state.loginState}/>
            </Route>
            {/* Route path of "/" must be last as it matches all routes */}
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      </Router>
    );
  }
  
}

