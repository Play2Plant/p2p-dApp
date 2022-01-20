import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Team from './components/Team'
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
        <Route path="/about" component={About} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/team" component={Team} />
        <Route exact path="/" component={App} />
        <Route path="/nft" component={Marketplace} />
        <Route path="/mint" component={Mint} />
        <Route path="/leaf" component={Leaf} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


