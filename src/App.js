import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import Profile from './pages/Profile.js';
import SignIn from './pages/SignIn.js';
import Thanks from './pages/Thanks.js';
import Opening from './pages/Opening.js';

// Load Open Sans typeface
import 'typeface-open-sans'
import 'bulma/css/bulma.css'
import "./global.css"



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Opening} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Thanks" component={Thanks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
