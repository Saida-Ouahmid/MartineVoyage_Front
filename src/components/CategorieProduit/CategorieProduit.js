import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
import Searchbar from "../../assets/components/Searchbar/Searchbar";
import Vignette from "../../assets/components/Vignette/Vignette.js";
import Footer from "../../assets/components/Footer/Footer.js";

/*style import*/
import "./style.scss";

class CategorieProduit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Searchbar />
        <div className="categorieProduitTitre">
          <h1>VACANCES EN MER OU EN MONTAGNE</h1>
          <p>
            Réservez en toute confiance - nous proposons des conditions de
            <br />
            réservation souples pendant la crise du COVID-19.
          </p>
        </div>
        <div className="categorieProduitTexte">
          <p>
            Découvrez nos stages et séjours surf dans nos différentes
            destinations :
            <br />
            France, Portugal, Maroc, Bali, Costa Rica... Quelque soit la durée{" "}
            de vos vacances , adoptez le rythme de la vie dans votre camp,{" "}
            <br />
            découvrez les plus beaux spots des environs et profitez de conseils
            de moniteurs expérimentés. Formules 2 à 14 jours en <br />
            demi-pension ou tout compris. Nombreuses activités annexes
            disponibles (yog, vtt, rando...).
          </p>
        </div>
        <div className="vignette-container">
          <Vignette
            prix={800}
            title="Kitsurf"
            description="c'est bon pour le moral"
            image="/images/kitesurf.jpg"
          />
          <Vignette
            prix={600}
            title="Surf"
            description="c'est bon pour le moral"
            image="/images/surf.jpg"
          />
          <Vignette
            prix={400}
            title="Plongée"
            description="c'est bon pour le moral"
            image="/images/produitplongee.jpg"
          />
          <Vignette
            prix={200}
            title="Escalade"
            description="c'est bon pour le moral"
            image="/images/escalade.jpg"
          />
          <Vignette
            prix={400}
            title="Ski"
            description="c'est bon pour le moral"
            image="/images/ski.jpg"
          />
          <Vignette
            prix={800}
            title="Snowkite"
            description="c'est bon pour le moral"
            image="/images/produitsnowkit.jpg"
          />
        </div>

        <div className="categorieProduitTexteDuBas">
          <p>
            L'équipe MARTINE VOYAGE sélectionne pour vous les meilleurs
            activités sur les spots du monde entiers, en fonction de la qualité
            <br />
            du cadre et de l'hébergement, de l'esprit des hôtes et de la qualité
            pédagogique des moniteurs, qui tous détenteur d'un diplôme d'état
            <br />( ou équivalent).
          </p>
        </div>
      </div>
    );
  }
}

export default CategorieProduit;
