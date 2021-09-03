import React from "react";
import Grille from "./components/Grille";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleStartGame: false,
    };
  }

  onStartGame = () => {
    this.setState({ handleStartGame: true });
  };

  render() {
    return (
      <>
        <h2>Puissance 4</h2>
        {this.state.handleStartGame ? (
          <Grille />
        ) : (
          <button className="button" type="button" onClick={this.onStartGame}>
            Démarrer le jeu
          </button>
        )}
      </>
    );
  }
}

export default Acceuil;
