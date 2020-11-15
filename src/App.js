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
import Login from "./Login.js";
import ContactSupport from "./ContactSupport.js";


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      loginState: false,
    }
    this.changeLoginStateFromApp = this.changeLoginStateFromApp.bind(this);
  }

  changeLoginStateFromApp(to) {
      this.setState({
        loginState: to
      })
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
              <Reviews />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/accSetup">
              <AccSetup />
            </Route>
            <Route path="/login">
              <Login username={this.state.user.username} password={this.state.user.password} changeLoginState={this.changeLoginStateFromApp} loginState={this.state.loginState}/>
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

