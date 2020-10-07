import React from 'react';
import { Router as Router, Switch, Route } from 'react-router';

//Pages
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Solutions from './components/pages/Solutions/Solutions';
import About from './components/pages/About/About';

// Solutions
import DevSecOps from './components/pages/Solutions/DevSecOps/DevSecOps';
import CloudBuilder from './components/pages/Solutions/CloudBuilder/CloudBuilder';
import ContainerVM from './components/pages/Solutions/ContainerVM/ContainerVM';
import RealTime from './components/pages/Solutions/RealTime/RealTime';
import Covid from './components/pages/Solutions/Covid/Covid';
 
export default (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route exact path="/solutions" component={Solutions} />
        <Route path="/solutions/devsecops" component={DevSecOps} />
        <Route path="/solutions/intelligent-security-infrastructure-building" component={CloudBuilder} />
        <Route path="/solutions/secure-containers-vms" component={ContainerVM} />
        <Route path="/solutions/real-time-compliance-readiness-controls" component={RealTime} />
        <Route path="/solutions/covid-19" component={Covid} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);