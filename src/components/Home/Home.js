import React, { Component } from "react";
import Footer from "../../assets/components/Footer/Footer.js";
import Vignette from "../../assets/components/Vignette/Vignette.js";
import Navbar from "../../assets/components/Navbar/Navbar";
import Searchbar from "../../assets/components/Searchbar/Searchbar";
/**
 * * Import Barre de recherche
 */
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Navbar />
        <h2>Les nouveaux voyages de Martine</h2>
        <Searchbar />
        <Vignette />
        <Vignette />
        <Vignette />
        <Vignette />
        <p className="home_paragraphe">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit ci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac
        </p>
        <Footer />
      </div>
    );
  }
}

export default Home;
