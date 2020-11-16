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


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "johndoe",
      password: "",
      user: {
        fullName: "John Doe",
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
      reviews: [...this.state.reviews, review]
    })
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
            
            <Route path="/accSetupFirst">
              <AccSetupFirst username={this.state.username} password={this.state.password} updateUsername={this.updateUsername} updatePassword={this.updatePassword} />
            </Route>
            <Route path="/accSetup">
              <AccSetup changeLoginState={this.changeLoginStateFromApp} 
              updateUserInfo={this.updateUserInfoFromApp}  
              existingUserInfo={this.state.user}/>
            </Route>
            
            <Route path="/settings">
              <Settings username={this.state.username} reviews={this.state.reviews} existingUserInfo={this.state.user} updateUserInfo={this.updateUserInfoFromApp} />
            </Route>
            <Route path="/login">
              <Login username={this.state.user.username} password={this.state.user.password}
                changeLoginState={this.changeLoginStateFromApp} loginState={this.state.loginState}/>
            </Route>
            <Route path="/contactSupport">
              <ContactSupport />
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

