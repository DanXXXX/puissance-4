import React from "react";
import Grille from "./components/Grille";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleStartGame: false,
      player: 1,
      index: 0,
      toFill: [],
    };
    console.log(this.state.board);
  }
  onStartGame = () => {
    this.setState({ handleStartGame: true });
  };
  handleInput(e) {
    const toFill = this.state.toFill;
    toFill.push(+e.target.id);
    console.log(toFill);
    // this.setState({ toFill: push(e.target.id + 7 * 5) });
  }
  render() {
    return (
      <>
        <h1>Puissance 4</h1>
        <button className="button" type="button" onClick={this.onStartGame}>
          Démarrer le jeu
        </button>
        {this.state.handleStartGame && (
          <Grille
            toFill={this.state.toFill}
            onClick={this.handleInput.bind(this)}
          />
        )}
      </>
    );
  }
}

export default Acceuil;
