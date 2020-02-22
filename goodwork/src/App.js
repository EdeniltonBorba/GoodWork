import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup/signup.js";
import SearchResults from "./pages/SearchResults/SearchResults.js";
import Profile from './pages/Profile/Profile.js';


function App() {
  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/Profile" component={Profile} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
