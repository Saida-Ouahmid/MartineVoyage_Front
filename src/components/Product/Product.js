import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
/**
 * Import Barre de recherche
 */
import "./style.scss";
import Footer from "../../assets/components/Footer/Footer";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
      nombre_personne: 1,
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
          <div className="product_image">
            <ImageGallery items={images} />
          </div>
          <div className="product_detail">
            <h3 className="product_title">{this.state.title}</h3>
            <p className="product_description">{this.state.description}</p>
            <section className="product_reservation">
              <p>Sélectionnez vos dates de séjour </p>
              <span>Du</span>
              <input
                type="date"
                className="product_date"
                onChange={this.depart}
                value={this.state.depart}
              />
              <span>au</span>
              <input
                type="date"
                className="product_date"
                onChange={this.arrivee}
                placeholder="Date d'arrivée"
                value={this.state.arrivee}
              />
              <div className="nbr_produit">
                <span> Nombre de personnes</span>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={this.add}
                  value={this.state.nombre_personne}
                />
              </div>
            </section>
            <p className="product_price">{this.state.prix} €</p>
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
