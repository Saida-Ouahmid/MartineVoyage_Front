/**
 * Component - Vignette Produit
 */

import React, { Component } from "react";

/**
 * Import Feuille de style - Vignette produit
 */
import "./style.css";

class Vignette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      prix: 12,
      image: "/images/produit1.jpg",
      categorie: "mer",
      saison: "été",
    };
  }
  click = () => {
    /**
     * Lien vers la page produit concernée
     */ alert("Pouic");
  };

  render() {
    return (
      <div className="vignette_produit">
        <div className="texte_vignette">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <p className="price_tag">
          A partir de <br></br> {this.props.prix} €
        </p>

        <div>
          <button
            onClick={this.click}
            onmouseover=""
            className="bouton_vignette"
          >
            En savoir plus
          </button>
        </div>
        <img src={this.props.image} className="img_vignette" alt="KiteSurf" />
      </div>
    );
  }
}
export default Vignette;
