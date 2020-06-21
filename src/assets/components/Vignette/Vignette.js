/**
 * Component - Vignette Produit
 */

import React, { Component } from "react";

/**
 * Import Feuille de style - Vignette produit
 */
import "./style.scss";
import { Link } from "react-router-dom";

class Vignette extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      title: "Titre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      prix: 12,
      image: "/images/produit1.jpg",
      categorie: "mer",
      saison: "été",
    };*/
  }
  /*click = () => {
    /**
     * Lien vers la page produit concernée
    // * alert("Redirection page");
  };*/

  render() {
    return (
      <div className="vignette-produit">
        <img src={this.props.image} className="img-vignette" alt="KiteSurf" />
        <p className="price-tag">
          A partir de <br></br> {this.props.prix} €
        </p>
        <div className="texte-vignette">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>

        <div>
          <Link to="/Product">
            <button
              /*onClick={this.click}*/
              onmouseover=""
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
