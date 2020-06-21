import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
import Footer from "../../assets/components/Footer/Footer";
import Vignette from "../../assets/components/Vignette/Vignette";
/**
 * Import Barre de recherche
 */
import "./style.scss";

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
        <div className="product-infos">
          <div className="product-image">
            <ImageGallery items={images} />
          </div>
          <div className="product-detail">
            <h3 className="product-title">{this.state.title}</h3>
            <p className="product-description">{this.state.description}</p>
            <section className="product-reservation">
              <p>Sélectionnez vos dates de séjour </p>
              <span>Du</span>
              <input
                type="date"
                className="product-date"
                onChange={this.depart}
                value={this.state.depart}
              />
              <span>au</span>
              <input
                type="date"
                className="product-date"
                onChange={this.arrivee}
                placeholder="Date d'arrivée"
                value={this.state.arrivee}
              />
              <div className="nbr-produit">
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
            <p className="product-price">{this.state.prix} €</p>
            <input
              type="submit"
              className="product-valid"
              onClick={this.click}
              value="Je réserve"
            />
            <p>Une question ?</p>
            <a href="mailto=bonjourmartine@martinevoyage.com">
              <button>Contactez-nous</button>
            </a>
          </div>
        </div>
        <div className="suggestion">
          <h2>Ces séjours pourraient aussi vous plaire</h2>
          <div className="composant-vignette">
            <Vignette image="/images/kitesurf2.jpg" />
            <Vignette image="/images/diving.jpg" />
          </div>
          <p className="informations">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque
            fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
