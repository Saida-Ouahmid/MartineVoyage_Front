/**
 * Component - Vignette Produit
 */
import getProductInfo from "../../../components/Product/Product.js";
import getLastTrip from "../../../components/Product/Product.js";
import Product from "../../../components/Product/Product.js";
import React, { Component } from "react";

/**
 * Import Feuille de style - Vignette produit
 */
import "./style.scss";
import { Link } from "react-router-dom";

class Vignette extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* click = () => {
    console.log("coucou");

    this.getProductInfo();
    this.getLastTrip();
  };*/
  render() {
    return (
      <div className="vignette-produit">
        <img src={this.props.image} className="img-vignette" alt="KiteSurf" />
        <p className="price-tag">
          A partir de <br></br> {this.props.prix} €
        </p>
        <div className="texte-vignette">
          <h3> {this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>

        <div>
          <Link to={"/Product/" + this.props.title}>
            <button
              /* onClick={this.click}*/
              onMouseOver=""
              className="bouton-vignette"
            >
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Vignette;
