import React, { Component } from "react";
import Navbar from "../../assets/components/Navbar/Navbar";
import Footer from "../../assets/components/Footer/Footer.js";

/*style import*/
import "./style.scss";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: {
        lastname: null,
        firstname: null,
        email: null,
        tel: null,
        password: null,
        hobbies: null,
        order: [
          {
            travel_name: null,
            travellers_number: null,
            total_price: null,
            travel_date: null,
          },
        ],
      },
    };
  }

  change = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // identifier Id de l'input = choisir la valeur qui se trouve dans l'input
    });
  };

  getDataProfil = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      /**on ajoute le header autorization qui a comme valeur bearer(espace)token */
      Authorization: "bearer " + localStorage.getItem("token"),
    });
    const data = {
      /*on appel l'userId dans le body en le recuperant du localstorage */
      userId: localStorage.getItem("userId"),
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:4000/profil/dataProfil", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const profilInfo = responseObject;
          this.setState({ profil: profilInfo });
          console.log(this.state);
        },

        (error) => {
          console.log(error);
        }
      );
  };
  componentDidMount() {
    this.getDataProfil();
  }

  editProfil = (e) => {
    e.preventDefault();
    const data = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      email: this.state.email,
      tel: this.state.tel,
      password: this.state.password,
      hobbies: this.state.hobbies,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:4000/profil/edit", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };

  deleteProfil = (e) => {
    e.preventDefault();

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "DELETE",
      headers: headers,
    };

    fetch("http://localhost:4000/profil/delete", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };
  signOut = () => {
    localStorage.clear();
  };
  render() {
    return (
      <div className="blocProfil">
        <div className="identifiants">
          <h3>Bienvenue sur votre compte client!</h3>
          <p className="para">
            Vous pouvez mettre à jours vos données, consulter votre historique
            de voyage ou supprimer votre compte :-( .
          </p>
          <form>
            <label htmlFor="lastname">Nom</label>
            <br />
            <input
              type="text"
              id="lastname"
              value={this.state.profil.lastname}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="firstname">Prénom</label>
            <br />
            <input
              type="text"
              id="firstname"
              value={this.state.profil.firstname}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="tel">Numéro de téléphone</label>
            <br />
            <input
              type="tel"
              id="tel"
              onChange={this.change}
              value={this.state.profil.tel}
            />
            <br /> <br />
            <label htmlFor="email">e-mail</label>
            <br />
            <input
              type="email"
              id="email"
              value={this.state.profil.email}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="modifier le mot de passe"
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="hobbies">Hobbies</label>
            <br />
            <input
              type="text"
              id="hobbies"
              value={this.state.profil.hobbies}
              onChange={this.change}
            />
            <br /> <br />
            <button type="submit" onClick={this.editProfil}>
              Modifier
            </button>
            <button type="submit" onClick={this.deleteProfil}>
              Supprimer
            </button>
            <button type="submit" onClick={this.signOut}>
              Se déconnecter
            </button>
            <p>{this.state.message}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Profil;
