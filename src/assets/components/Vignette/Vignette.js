/**
 * Component - Vignette Produit
 */

import React, { Component } from "react";

/**
 * Import Feuille de style - Vignette produit
 */
import "./style.scss";

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
  click = () => {
    /**
     * Lien vers la page produit concernée
     */ alert("Redirection page");
  };

  render() {
    return (
      <div className="vignette-produit">
        <div className="texte-vignette">
          <h2>{this.props.title}</h2>
          <p>{this.props.children}</p>
        </div>
        <p className="price-tag">
          A partir de <br></br> {this.props.prix} €
        </p>

        <div>
          <button
            onClick={this.click}
            onmouseover=""
            className="bouton-vignette"
          >
            En savoir plus
          </button>
        </div>
        <img src={this.props.image} className="img-vignette" alt="KiteSurf" />
      </div>
    );
  }
}
export default Vignette;
