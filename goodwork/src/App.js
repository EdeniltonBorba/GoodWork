import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup/signup.js";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Signup} />
        <Route exact path="/Home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
