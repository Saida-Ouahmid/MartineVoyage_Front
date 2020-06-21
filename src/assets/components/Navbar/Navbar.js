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
        <h1>MARTINE VOYAGE</h1>

        <nav>
          <ul>
            <li className="dropDown">
              <a>Panier</a>
            </li>
            <li className="dropDown">
              <a>Inscription</a>
            </li>
            <li className="dropDown">
              <a>inspirez-moi</a>
            </li>
            <li className="dropDown">
              <a>Je pars quand?</a>
              <ul>
                <li> En hiver</li>
                <li>En été</li>
              </ul>
            </li>
            <li className="dropDown">
              <a>Je pars ou?</a>
              <ul>
                <li> En mer</li>
                <li>En montagne</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="homeImage">
          <img src="/images/mer-montagne.jpg" alt="mer-montagne" />
        </div>
        <div className="barreDeRecherche">
          <button className="buttonDeRecherche">
            <i class="fas fa-search"></i>
          </button>
          <label for="recherche"></label>
          <input
            type="search"
            id="recherche"
            name="recherche"
            aria-label="Search through site content"
            placeholder="rechercher sur le site"
          ></input>
        </div>
      </div>
    );
  }
}

export default App;
