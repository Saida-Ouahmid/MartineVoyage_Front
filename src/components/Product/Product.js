import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
/**
 * Import Barre de recherche
 */
import "./style.css";
import Footer from "../../assets/components/Footer/Footer";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      prix: 12,
      prix_base: 12,
      image: "/images/produit1.jpg",
      categorie: "mer",
      saison: "été",
      nombre_personne: 0,
      depart: "",
      arrivee: "",
    };
  }

  click = () => {
    alert("Ajout panier");
  };
  add = (e) => {
    if (this.state.nombre_personne <= 10) {
      this.setState({
        prix: this.state.prix_base * parseInt(e.target.value),
        nombre_personne: parseInt(e.target.value),
      });
    }
  };
  depart = (e) => {
    this.setState({
      depart: e.target.value,
    });
  };
  arrivee = (e) => {
    this.setState({
      arrivee: e.target.value,
    });
  };

  render() {
    return (
      <div className="product">
        <div className="product_infos">
          <img
            src="/images/kitesurf.jpg"
            alt="Visuel"
            className="product_image"
          ></img>
          <div className="product_detail">
            <h3 className="product_title">{this.state.title}</h3>
            <p className="product_description">{this.state.description}</p>

            <p>Sélectionnez vos dates de séjour </p>
            <span>Départ</span>
            <input
              type="date"
              className="product_date"
              onChange={this.depart}
              value={this.state.depart}
            />
            <br></br>
            <span>Arrivée</span>
            <input
              type="date"
              className="product_date"
              onChange={this.arrivee}
              placeholder="Date d'arrivée"
              value={this.state.arrivee}
            />
            <p>
              Votre voyage est prévu du {this.state.depart} au{" "}
              {this.state.arrivee}
            </p>
            <span> Nombre de personnes</span>
            <input
              type="number"
              min="0"
              max="10"
              onChange={this.add}
              value={this.state.nombre_personne}
            />

            <p className="product_price">Prix : {this.state.prix} €</p>
            <input
              type="submit"
              className="product_valid"
              onClick={this.click}
              value="Je réserve"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;
