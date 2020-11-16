/*
Templated code from react-create-app.
Templated code from react router: https://reactrouter.com/web/guides/quick-start
*/
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Reviews from "./Reviews.js";
import Search from "./Search.js";
import Map from "./Map.js";
import Main from "./Main.js";
import Details from "./Details.js";
import AccSetup from "./AccSetup.js";
import AccSetupFirst from "./AccSetupFirst.js";
import Login from "./Login.js";
import Settings from "./Settings.js";
import ContactSupport from "./ContactSupport.js";
import Logout from "./Logout.js";


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "johndoe",
      password: "compsci4hc3",
      user: {
        fullName: "John Doe",
        age: 19,
        gender: "Male",
        ethnicity: "Caucasian",
        campusName: "McMaster University",
        preferences: "Vegetarian, mild, noodles",
        dietaryRestrictions: "Vegetarian",
        weeklyBudget: 35,
        spendingAmount: 5,
        spendingPer: "week"
      },
      reviews: [],
      loginState: false,
    }

    this.updateUserInfoFromApp = this.updateUserInfoFromApp.bind(this);
    this.changeLoginStateFromApp = this.changeLoginStateFromApp.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.addReviewToGlobal = this.addReviewToGlobal.bind(this);
  }

  addReviewToGlobal(review) {
    this.setState({
      reviews: [
        ...this.state.reviews.filter(r =>
          r.username !== review.username || r.restaurant_id !== review.restaurant_id),
        review
      ]
    });
  }

  updateUserInfoFromApp(state) {
    this.setState({
      user: state
    });
  }


  updateUsername(username) {
    this.setState({
      username: username
    });
  }

  updatePassword(password) {
    this.setState({
      password: password
    });
  }


  changeLoginStateFromApp(to) {
    this.setState({
      loginState: to
    });
  }

  render() {
    window.state = this.state;
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
              <Reviews globalReviews={this.state.reviews} addReviewToGlobal={this.addReviewToGlobal} username={this.state.username} existingUserInfo={this.state.user}/>
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/logout">
            <Logout changeLoginState={this.changeLoginStateFromApp} />
            </Route>
            <Route path="/accSetupFirst">
              <AccSetupFirst updateUsername={this.updateUsername} updatePassword={this.updatePassword} />
            </Route>
            <Route path="/accSetup">
              <AccSetup changeLoginState={this.changeLoginStateFromApp} 
                updateUserInfo={this.updateUserInfoFromApp} />
            </Route>
            <Route path="/settings">
            <Settings reviews={this.state.reviews} username={this.state.username} password={this.state.password}
              existingUserInfo={this.state.user} updateUserInfo={this.updateUserInfoFromApp}
              updateUsername={this.updateUsername} updatePassword={this.updatePassword} />
          </Route>
            <Route path="/login">
              <Login username={this.state.username} password={this.state.password}
                changeLoginState={this.changeLoginStateFromApp} loginState={this.state.loginState}/>
            </Route>
            <Route path="/contactSupport">
              <ContactSupport />
            </Route>
            <Route exact path="/">
            <Main />
          </Route>
            {/* Route path of "/" must be last as it matches all routes */}
            <Route path="/">
            <Redirect to="/" />
          </Route>
          </Switch>

      </Router>
    );
  }

}

