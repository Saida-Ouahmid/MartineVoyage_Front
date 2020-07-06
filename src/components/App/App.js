/**
 * App.js - Main app component
 */

/*Module imports*/
import React, { Component } from "react";
import Home from "../Home/Home";

import Product from "../Product/Product";
import CategorieProduit from "../CategorieProduit/CategorieProduit";
import Inscription from "../Inscription/Inscription";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../assets/components/Navbar/Navbar";

/* Style import*/
import "./App.scss";
import Footer from "../../assets/components/Footer/Footer";

/*Main app component*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />

          <Switch>
            <Route path="/je-pars-quand" component={CategorieProduit} />
            <Route path="/je-pars-ou/:category" component={CategorieProduit} />
            <Route exact path="/" component={Home} />
            <Route path={"/Product/:name"} component={Product} />
            <Route path="/Inscription" component={Inscription} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
