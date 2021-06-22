import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './Pages/Home';
import Faqs from './Pages/Faqs';
import Parties from './Pages/Parties';
import WhoToChoose from './Pages/WhoToChoose';
import About from './Pages/About';
import Navbar from './Components/Navbar';

export default function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          <Route path="/parties">
            <Parties />
          </Route>
          <Route path="/whotochoose">
            <WhoToChoose />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}