import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav bar/nav";
import Home from "./components/home/home";
import AboutMe from "./components/about me/aboutMe";

class App extends React.Component {
  render() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
