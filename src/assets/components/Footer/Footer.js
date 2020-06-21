import React, { Component } from "react";

import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_contact">
          <h2> Nous sommes à votre service</h2>
          <div className="block">
            <div className="colonne email">
              <h4>Contactez-nous par e-mail</h4>
              <span> Envoyez-nous un message à l'adresse suivante </span>
              <span> bonjourmartine@martinevoyage.com</span>
            </div>
            <div className="colonne telephone">
              <h4>Contactez-nous par telephone</h4>
              <p> Nous sommes à votre service au </p>
              <a href="tel:0000000000">09 08 07 05 04 </a>
            </div>
            <div className="colonne resaux_sociaux">
              <h4>Suivez nos aventures</h4>
            </div>
          </div>
        </div>
        <div className="footer_infos">
          <img alt="logo"></img>
          <p>Les séjours</p>
          <p>Qui sommes-nous ?</p>
          <p>Mention légales</p>
          <p>CGV</p>
        </div>
      </div>
    );
  }
}

export default Footer;
