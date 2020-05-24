import React from 'react';
import Landing from './components/Landing'
import SelectLanguage from './components/SelectLanguage'
import ChooseVideo from './components/ChooseVideo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Learn from './components/Learn';


function App() {
  return (
    <Router>
      <div>
        <Switch>
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
