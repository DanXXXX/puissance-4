import React from 'react';
import Grille from './components/Grille'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss';

class Acceuil extends React.Component {
  constructor(props) {
    super(props)
    this.state = { handleStartGame: false }

  }
  handleStartGame = () => {
    this.setState({ handleStartGame: true })
  }
  render() {
    return (
      <>
      

        <h1>Puissance 4</h1>
        <button className="button" type="button" onClick={this.handleStartGame}>Démarrer le jeu</button>
        {this.state.handleStartGame &&
        <Grille />
        }

      </>
    );
  }
}

export default Acceuil;

