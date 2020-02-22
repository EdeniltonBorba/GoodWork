import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SearchResults from "./pages/SearchResults/SearchResults.js";
import Profile from './pages/Profile/Profile.js';
import SignIn from './pages/SignIn/SignIn.js';


function App() {
  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/Profile" component={Profile} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
