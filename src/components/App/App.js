/**
 * App.js - Main app component
 */

/*Module imports*/
import React, { Component } from "react";
import Home from "../Home/Home";
import Product from "../Product/Product";
import CategorieProduit from "../CategorieProduit/CategorieProduit";

/* Style import*/
import "./App.css";

/*Main app component*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/*<Home />*/}
        <CategorieProduit />
      </div>
    );
  }
}

export default App;
