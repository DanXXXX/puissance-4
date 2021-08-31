import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss';

class Acceuil extends React.Component {

  handleStartGame = () => {
   
  }

  render() { 
   return (  
    <>
    <h1>Puissance 4</h1>
    <button className="button" type="button" onClick={this.handleStartGame()}>Démarrer le jeu</button>
    </>
    );
  }
}
 
export default Acceuil;