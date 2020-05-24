import React from 'react';
import Landing from './components/Landing'
import SelectLanguage from './components/SelectLanguage'
import ChooseVideo from './components/ChooseVideo'
import Learn from './components/Learn';
import Practice from './components/Practice'
import Result from './components/Result';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/result/:value">
            <Result />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/chooseVideo">
            <ChooseVideo />
          </Route>
          <Route path="/selectLanguage">
            <SelectLanguage />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
