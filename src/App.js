import React, { Component, Suspense, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { useTranslation } from 'react-i18next';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Atoms
import Toggle from './components/atoms/Toggle/Toggle';

// Templates
import Navbar from './components/templates/Navbar/Navbar';
import Drawer from './components/templates/Drawer/Drawer';
import Footer from './components/templates/Footer/Footer';

//Pages
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Solutions from './components/pages/Solutions/Solutions';
import Blog from './components/pages/Blog/Blog';
import CreateArticle from './components/pages/Blog/CreateArticle/CreateArticle';
import Events from './components/pages/Events/Events';
import About from './components/pages/About/About';

// Solutions
import DevSecOps from './components/pages/Solutions/DevSecOps/DevSecOps';
import CloudBuilder from './components/pages/Solutions/CloudBuilder/CloudBuilder';
import ContainerVM from './components/pages/Solutions/ContainerVM/ContainerVM';
import RealTime from './components/pages/Solutions/RealTime/RealTime';
import Covid from './components/pages/Solutions/Covid/Covid';

// Dummy Templates
import TemplateOne from './components/pages/templates/1. TemplateOne/TemplateOne';
import TemplateEight from './components/pages/templates/8. TemplateEight/TemplateEight';
import TemplateNine from './components/pages/templates/9. TemplateNine/TemplateNine';
import TemplateSeven from './components/pages/templates/7. TemplateSeven/TemplateSeven';
import TemplateTwo from './components/pages/templates/2. TemplateTwo/TemplateTwo';
import TemplateThree from './components/pages/templates/3. TemplateThree/TemplateThree';
import TemplateFour from './components/pages/templates/4. TemplateFour/TemplateFour';
import TemplateFive from './components/pages/templates/5. TemplateFive/TemplateFive';
import TemplateSix from './components/pages/templates/6. TemplateSix/TemplateSix';

function App () {

  const [ state, setState ] = useState(false);
  const { t, i18n } = useTranslation();

  let toggle = () => {
    setState(!state);
  }

  let handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
      <Router>
        <Navbar logo={logo} handleClick={handleClick} t={t}/>
        <Drawer show={state} />
        <Toggle click={toggle} state={state} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route exact path="/solutions" component={Solutions} />
            <Route path="/solutions/devsecops" component={DevSecOps} />
            <Route path="/solutions/intelligent-security-infrastructure-building" component={CloudBuilder} />
            <Route path="/solutions/secure-containers-vms" component={ContainerVM} />
            <Route path="/solutions/real-time-compliance-readiness-controls" component={RealTime} />
            <Route path="/solutions/covid-19" component={Covid} />
          <Route exact path="/blog" component ={Blog} />
          <Route path="/blog/create" component={CreateArticle} />
            <Route path="/blog/articles/:id" render={() => (
              <h1>Individual page of the article</h1>
            )} />
          <Route exact path="/events" component={Events} />
          <Route path="/about" component={About} />

          // Templates
          <Route path="/templateone" component={TemplateOne} />
          <Route path="/templatetwo" component={TemplateTwo} />
          <Route path="/templatethree" component={TemplateThree} />
          <Route path="/templatefour" component={TemplateFour} />
          <Route path="/templatefive" component={TemplateFive} />
          <Route path="/templatesix" component={TemplateSix} />
          <Route path="/templateseven" component={TemplateSeven} />
          <Route path="/templateeight" component={TemplateEight} />
          <Route path="/templatenine" component={TemplateNine} />

        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
