import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
import Footer from "../../assets/components/Footer/Footer.js";

/*style import*/
import "./style.scss";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: null,
      prenom: null,
      age: null,
      mail: null,
      tel: null,
      password: null,
      conditions: null,
    };
  }
  /*fonction pour ecrire dans nos input*/
  change = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // identifier Id de l'input = choisir la valeur qui se trouve dans l'input
    });
  };

  submit = (event) => {
    event.preventDefault(); //empecher le formulaire de recharger la page
    console.log(this.state); // envoyé le contenu du formulaire dans la console
  };
  render() {
    return (
      <div className="wrapper">
        <div className="identifiants">
          <h3>Créez votre compte client</h3>
          <form onSubmit={this.submit}>
            <label htmlFor="nom">Nom</label>
            <br />
            <input
              type="text"
              id="nom"
              placeholder="Nom"
              onChange={this.change}
            />
            <br />
            <label htmlFor="prenom">Prénom</label>
            <br />
            <input
              type="text"
              id="prenom"
              placeholder="Prénom"
              onChange={this.change}
            />
            <br />
            <label htmlFor="age">Age</label>
            <br />
            <input
              type="number"
              id="age"
              placeholder="Age"
              onChange={this.change}
            />
            <br />
            <label htmlFor="tel">Tel</label>
            <br />
            <input
              type="tel"
              id="tel"
              placeholder="Téléphone"
              onChange={this.change}
            />
            <br />
            <label htmlFor="mail">Mail</label>
            <br />
            <input
              type="mail"
              id="mail"
              placeholder="Mail"
              onChange={this.change}
            />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              onChange={this.change}
            />
            <br />
            <input
              type="checkbox"
              name="conditions"
              id="conditions"
              onChange={this.change}
            />
            <label for="conditions">J'ai lu les conditions</label>
            <br />
            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inscription;
