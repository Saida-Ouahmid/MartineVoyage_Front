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
  constructor(props) {
    super(props);
    this.state = {
      travel: [
        {
          title: "Séjour de plongée",
          prix: 400,
          image: "/images/diving.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Séjour de Kitesurf",
          prix: 600,
          image: "/images/kitesurf2.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Séjour d'escalade",
          prix: 350,
          image: "/images/grimpe.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Séjour Snowboard",
          prix: 900,
          image: "/images/snowboard.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  }
  display = () => {
    let contentDisplay = [];
    this.state.travel.forEach((element, index) => {
      contentDisplay.push(
        <Vignette
          key={index}
          image={element.image}
          prix={element.prix}
          title={element.title}
          description={element.description}
        />
      );
    });
    return contentDisplay;
  };
  render() {
    return (
      <div className="home-page">
        <Searchbar />
        <h2>Les nouveaux voyages de Martine</h2>
        <div className="display">{this.display()}</div>
        <p className="home-paragraphe">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit ci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac
        </p>
      </div>
    );
  }
}

export default Home;
