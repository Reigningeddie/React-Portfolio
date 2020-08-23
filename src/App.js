import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home/home";
import AboutMe from "./components/about me/aboutMe";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


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
        <Navbar className="border-bottom" expand="lg" fluid={true}>
          <Navbar.Brand>Eduardo Aguilar</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/Home">Home</Link>
              <Link className="nav-link" to="/AboutMe">About</Link>
              <Link className="nav-link" to="/Projects">Projects</Link>
              <Link className="nav-link" to="/ContactMe">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
