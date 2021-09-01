import React from 'react';
import Case from './Case';

class Grille extends React.Component {

renderGrill = () => {
   let grille = []
    for (let casier = 1; casier <= 42; casier++) {
      
       grille.push(<Case />)
    }
        return grille
  }
        
    render() { 
        return ( 

            <div className="containers">

                {this.renderGrill()}

            </div>
         );
    }
}
 
export default Grille;