import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Home from "./components/home/home";
import AboutMe from "./components/about me/aboutMe";
import Projects from "./components/portfolio/portfolio"
import ContactMe from "./components/contact me/contactMe";
import Footer from './components/Footer'





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
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/AboutMe">About</Link>
              <Link className="nav-link" to="/Projects">Projects</Link>
              <Link className="nav-link" to="/ContactMe">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route exact path="/aboutme" render={() => <AboutMe title={this.state.about.title} />} />
          <Route exact path="/projects" render={() => <Projects title={this.state.home.title} />} />
          <Route exact path="/contactme" render={() => <ContactMe title={this.state.contact.title} />} />
          <Route path="*" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
