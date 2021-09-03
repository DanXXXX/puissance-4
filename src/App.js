import React from "react";
import Grille from "./components/Grille";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleStartGame: false,
      player: 1,
      index: 0,
      toFill: [],
      
    };
  }

  onStartGame = () => {
    this.setState({ handleStartGame: true });
  };

  render() {
    return (
      <>
        <h1>Puissance 4</h1>
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

export default App;
