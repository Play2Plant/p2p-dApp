import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Service from './components/Service'
import About from './components/About'
import Marketplace from './components/Marketplace'
import Leaf from './components/Leaf'
import Mint from './components/Mint'
import Roadmap from './components/Roadmap'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/mint" component={Mint} />
        <Route path="/nft" component={Marketplace} />
        <Route path="/leaf" component={Leaf} />
        <Route path="/service" component={Service} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


