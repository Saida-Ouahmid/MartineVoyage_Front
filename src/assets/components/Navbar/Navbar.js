/*module imports*/
import React, { Component } from "react";

/*style import*/
import "./style.scss";

/*main app component*/
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <img src="/images/logonoir.png" className="logo" />

        <nav>
          <ul>
            <li className="dropDown">
              <a>
                <i class="fas fa-cart-arrow-down"></i>
              </a>
            </li>
            <li className="dropDown">
              <a>
                <i class="fas fa-sign-in-alt"></i>
              </a>
            </li>
            <li className="dropDown">
              <a>inspirez-moi</a>
            </li>
            <li className="dropDown">
              <a>Je pars quand?</a>
              <ul className="dropDownChild">
                <a> En hiver</a>
                <a>En été</a>
              </ul>
            </li>
            <li className="dropDown">
              <a>Je pars ou?</a>
              <ul className="dropDownChild">
                <a> En mer</a>
                <a>En montagne</a>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="homeImage">
          <img src="/images/mer-montagne.jpg" alt="mer-montagne" />
        </div>
      </div>
    );
  }
}

export default App;
