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

function App() {
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
          {/* Route path of "/" must be last as it matches all routes */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
