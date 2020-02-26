import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import Profile from './pages/Profile.js';
import SignIn from './pages/SignIn.js';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
