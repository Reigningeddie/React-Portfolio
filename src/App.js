import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav bar/nav";
import Home from "./components/home/home";
import AboutMe from "./components/about me/aboutMe";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Eduardo Aguilar',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/AboutMe' },
        { title: 'Contact', path: '/contactMe' }
      ],
      home: {
        title: 'Portfolio',
        text: 'Checkout projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me',
      }
      
    }
  }
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
