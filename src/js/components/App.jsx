import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './header';
import Footer from './footer/Footer';
import Home from './Home/Home';
import Junior from './Junior/Junior';
import Middle from './middle/Middle';
import PhotoGallery from './photogallery/PhotoGallery';
import Achievers from './achievers/Achievers';
import Events from './events/Events';
import Contact from './contact/Contact';
import Policies from './policies/Policies';
import OurSchool from './ourschool/OurSchool';
import Senior from './Senior/Senior';
import HR from './hr/HR';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {}

  render() {
    // let { } = this.props;

    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/junior" component={Junior} />
            <Route exact path="/middle" component={Middle} />
            <Route exact path="/photo-galleries" component={PhotoGallery} />
            <Route exact path="/annual-achievers" component={Achievers} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/policies" component={Policies} />
            <Route exact path="/school" component={OurSchool} />
            <Route exact path="/senior" component={Senior} />
            <Route exact path="/hr" component={HR} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   //getAction: PropTypes.func.isRequired,
// };

function mapStateToProps(state) {
  return {
    test: state.test
  };
}

export default connect(mapStateToProps, {})(App);
