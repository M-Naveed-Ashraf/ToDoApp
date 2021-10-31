import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Main from './main.js';
import Try from './try.js';
import "./App.css";
import Login from './login.js';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Try} />
      </Switch>
    </Router>
  );
}

export default App;
