/**
 * App.js - Main app component
 */

/*Module imports*/
import React, { Component } from "react";
import Home from "../Home/Home";

import Product from "../Product/Product";

/* Style import*/
import "./App.scss";

/*Main app component*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default App;
