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
    let profil = this.state.profil;
    profil[event.target.name] = event.target.value;
    this.setState({
      profil: profil,
      // identifier name de l'input = choisir la valeur qui se trouve dans l'input
    });
  };

  postDataProfil = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      /**on ajoute le header autorization qui a comme valeur bearer(puis espace) suivi par le token de l'user */
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
    this.postDataProfil();
  }

  editProfil = (e) => {
    e.preventDefault();
    const data = {
      userId: localStorage.getItem("userID"),
      profil: this.state.profil,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
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
              name="lastname"
              value={this.state.profil.lastname}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="firstname">Prénom</label>
            <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={this.state.profil.firstname}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="tel">Numéro de téléphone</label>
            <br />
            <input
              type="tel"
              id="tel"
              name="tel"
              value={this.state.profil.tel}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="email">e-mail</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.profil.email}
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="modifier le mot de passe"
              onChange={this.change}
            />
            <br /> <br />
            <label htmlFor="hobbies">Hobbies</label>
            <br />
            <input
              type="text"
              id="hobbies"
              name="hobbies"
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
            <p>{this.state.message}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Profil;
