import React from 'react';
import Case from './components/Case';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderGrill = () => {
   let grille = []
    for (let casier = 1; casier <= 42; casier++) {
      
       grille.push(<Case />)
    }
        return grille
  }
 
  render() { 
   

   

    return (  
      <>
        <h1>Puissance 4</h1>
        <div className="containers">

          

            {this.renderGrill()}
            
        
        </div>


      </>
    );
  }
}
 
export default App;